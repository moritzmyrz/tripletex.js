import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const specPath = path.join(rootDir, "docs", "openapi.json");
const outputDir = path.join(rootDir, "src", "generated");

const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
const operations = collectOperations(spec.paths ?? {});

const resources = groupOperationsByResource(operations);
const operationsFile = buildOperationsFile(operations);
const resourcesFile = buildResourcesFile(resources);

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "operations.ts"), operationsFile);
fs.writeFileSync(path.join(outputDir, "resources.ts"), resourcesFile);

console.log(
  `Generated ${operations.length} operations across ${Object.keys(resources).length} resources.`,
);

function collectOperations(pathsObject) {
  const methodOrder = ["get", "post", "put", "patch", "delete"];
  const result = [];

  for (const [routePath, routeMethods] of Object.entries(pathsObject)) {
    for (const methodName of methodOrder) {
      const operation = routeMethods[methodName];
      if (!operation?.operationId) {
        continue;
      }

      result.push({
        operationId: sanitizeIdentifier(operation.operationId),
        path: routePath,
        method: methodName.toUpperCase(),
      });
    }
  }

  result.sort((a, b) => a.operationId.localeCompare(b.operationId));

  const seen = new Set();
  for (const operation of result) {
    if (seen.has(operation.operationId)) {
      throw new Error(
        `Duplicate operationId after sanitize: ${operation.operationId}`,
      );
    }
    seen.add(operation.operationId);
  }

  return result;
}

function groupOperationsByResource(operationsList) {
  const resources = {};

  for (const operation of operationsList) {
    const resourceName = resolveResourceName(operation.path);
    if (!resources[resourceName]) {
      resources[resourceName] = [];
    }
    resources[resourceName].push(operation);
  }

  for (const operationsForResource of Object.values(resources)) {
    operationsForResource.sort((a, b) =>
      a.operationId.localeCompare(b.operationId),
    );
  }

  return Object.fromEntries(
    Object.entries(resources).sort(([a], [b]) => a.localeCompare(b)),
  );
}

function resolveResourceName(routePath) {
  const cleaned = routePath.replace(/^\//, "");
  if (!cleaned) {
    return "root";
  }

  const firstSegment = cleaned.split("/")[0];
  const withoutParams = firstSegment.replace(/[^a-zA-Z0-9]+/g, "");
  if (!withoutParams) {
    return "root";
  }

  return sanitizeIdentifier(withoutParams);
}

function sanitizeIdentifier(input) {
  const raw = input.replace(/[^a-zA-Z0-9_]+/g, "_");
  const trimmed = raw.replace(/^_+|_+$/g, "");
  const value = trimmed || "unnamed";
  if (/^[0-9]/.test(value)) {
    return `_${value}`;
  }
  return value;
}

function toPascalCase(input) {
  return input
    .split(/[_-]/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
}

function buildOperationsFile(operationsList) {
  const lines = [
    "import type { OperationDefinition } from '../types';",
    "",
    "export const OPERATION_DEFINITIONS = {",
  ];

  for (const operation of operationsList) {
    lines.push(
      `  ${operation.operationId}: { operationId: '${operation.operationId}', method: '${operation.method}', path: '${operation.path}' },`,
    );
  }

  lines.push("} as const satisfies Record<string, OperationDefinition>;");
  lines.push("");
  lines.push("export type OperationId = keyof typeof OPERATION_DEFINITIONS;");
  lines.push("");

  return `${lines.join("\n")}\n`;
}

function buildResourcesFile(resources) {
  const lines = [
    "import { BaseClient } from '../base';",
    "import type { ApiResult, GeneratedMethodArgs } from '../types';",
    "import { OPERATION_DEFINITIONS } from './operations';",
    "",
    "export interface GeneratedResourceConstructors {",
  ];

  const classNames = [];
  for (const resourceName of Object.keys(resources)) {
    const className = `${toPascalCase(resourceName)}Resource`;
    classNames.push(className);
    lines.push(`  ${resourceName}: ${className};`);
  }
  lines.push("}");
  lines.push("");

  for (const [resourceName, operationsForResource] of Object.entries(
    resources,
  )) {
    const className = `${toPascalCase(resourceName)}Resource`;
    lines.push(`export class ${className} extends BaseClient {`);
    for (const operation of operationsForResource) {
      lines.push(
        `  ${operation.operationId}(args: GeneratedMethodArgs = {}) {`,
      );
      lines.push(
        `    return this.callOperation<unknown>(OPERATION_DEFINITIONS.${operation.operationId}, args);`,
      );
      lines.push("  }");
      lines.push("");
      lines.push(
        `  ${operation.operationId}WithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {`,
      );
      lines.push(
        `    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.${operation.operationId}, args);`,
      );
      lines.push("  }");
      lines.push("");
    }
    lines.push("}");
    lines.push("");
  }

  lines.push("export const resourceMixins = [");
  for (const className of classNames) {
    lines.push(`  ${className},`);
  }
  lines.push("] as const;");
  lines.push("");
  const intersections = classNames.length
    ? classNames.join(" & ")
    : "Record<string, never>";
  lines.push(`export type GeneratedResourceMixin = ${intersections};`);

  return `${lines.join("\n")}\n`;
}
