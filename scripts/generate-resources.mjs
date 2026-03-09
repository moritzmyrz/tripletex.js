import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const specPath = resolveSpecPath(process.argv.slice(2));
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
  `Generated ${operations.length} operations across ${Object.keys(resources).length} resources from ${path.relative(rootDir, specPath)}.`,
);

function resolveSpecPath(argv) {
  const specArgIndex = argv.findIndex((entry) => entry === "--spec");
  const defaultSpec = path.join(rootDir, "docs", "openapi-prod.json");
  if (specArgIndex === -1) {
    return defaultSpec;
  }

  const rawSpecPath = argv[specArgIndex + 1];
  if (!rawSpecPath) {
    throw new Error("Missing value for --spec");
  }

  return path.isAbsolute(rawSpecPath)
    ? rawSpecPath
    : path.join(rootDir, rawSpecPath);
}

function collectOperations(pathsObject) {
  const methodOrder = ["get", "post", "put", "patch", "delete"];
  const result = [];

  for (const [routePath, routeMethods] of Object.entries(pathsObject)) {
    const routeParameters = Array.isArray(routeMethods.parameters)
      ? routeMethods.parameters
      : [];

    for (const methodName of methodOrder) {
      const operation = routeMethods[methodName];
      if (!operation?.operationId) {
        continue;
      }

      const operationParameters = Array.isArray(operation.parameters)
        ? operation.parameters
        : [];
      const allParameters = [...routeParameters, ...operationParameters];
      const hasRequiredPathParams = allParameters.some(
        (parameter) =>
          parameter &&
          typeof parameter === "object" &&
          parameter.in === "path" &&
          parameter.required !== false,
      );
      const hasRequiredBody =
        operation.requestBody &&
        typeof operation.requestBody === "object" &&
        operation.requestBody.required === true;

      result.push({
        operationId: sanitizeIdentifier(operation.operationId),
        openApiOperationId: operation.operationId,
        path: routePath,
        method: methodName.toUpperCase(),
        hasRequiredPathParams,
        hasRequiredBody,
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
    "import type { operations } from './openapi';",
    "",
  ];

  lines.push("export const OPERATION_OPENAPI_IDS = {");
  for (const operation of operationsList) {
    lines.push(
      `  ${operation.operationId}: '${operation.openApiOperationId}',`,
    );
  }
  lines.push("} as const;");
  lines.push("");
  lines.push("export const OPERATION_DEFINITIONS = {");

  for (const operation of operationsList) {
    lines.push(
      `  ${operation.operationId}: { operationId: '${operation.operationId}', method: '${operation.method}', path: '${operation.path}' },`,
    );
  }

  lines.push("} as const satisfies Record<string, OperationDefinition>;");
  lines.push("");
  lines.push("export type OperationId = keyof typeof OPERATION_DEFINITIONS;");
  lines.push("");
  lines.push(
    "type OpenApiOperationId<T extends OperationId> = (typeof OPERATION_OPENAPI_IDS)[T];",
  );
  lines.push(
    "type OperationSpec<T extends OperationId> = OpenApiOperationId<T> extends keyof operations ? operations[OpenApiOperationId<T>] : never;",
  );
  lines.push("");
  lines.push("type NormalizeNever<T> = [T] extends [never] ? undefined : T;");
  lines.push("type ExtractContent<T> = T extends { content: infer C }");
  lines.push("  ? C extends Record<string, unknown>");
  lines.push("    ? C[keyof C]");
  lines.push("    : unknown");
  lines.push("  : null;");
  lines.push("type SuccessResponse<T extends { responses: unknown }> =");
  lines.push("  | (T['responses'] extends { 200: infer R } ? ExtractContent<R> : never)");
  lines.push("  | (T['responses'] extends { 201: infer R } ? ExtractContent<R> : never)");
  lines.push("  | (T['responses'] extends { 202: infer R } ? ExtractContent<R> : never)");
  lines.push("  | (T['responses'] extends { 203: infer R } ? ExtractContent<R> : never)");
  lines.push("  | (T['responses'] extends { 204: infer R } ? ExtractContent<R> : never)");
  lines.push("  | (T['responses'] extends { 205: infer R } ? ExtractContent<R> : never)");
  lines.push("  | (T['responses'] extends { 206: infer R } ? ExtractContent<R> : never);");
  lines.push("");
  lines.push("type QueryForOperation<T extends OperationId> = NormalizeNever<");
  lines.push("  OperationSpec<T> extends { parameters: { query?: infer Q } } ? Q : never");
  lines.push(">;");
  lines.push("type PathForOperation<T extends OperationId> = NormalizeNever<");
  lines.push("  OperationSpec<T> extends { parameters: { path?: infer P } } ? P : never");
  lines.push(">;");
  lines.push("type BodyForOperation<T extends OperationId> = NormalizeNever<");
  lines.push("  OperationSpec<T> extends { requestBody: infer R }");
  lines.push("    ? ExtractContent<R>");
  lines.push("    : OperationSpec<T> extends { requestBody?: infer R }");
  lines.push("      ? ExtractContent<R>");
  lines.push("      : never");
  lines.push(">;");
  lines.push("type ResponseForOperation<T extends OperationId> = NormalizeNever<");
  lines.push("  SuccessResponse<OperationSpec<T>>");
  lines.push("> extends infer R");
  lines.push("  ? [R] extends [undefined]");
  lines.push("    ? unknown");
  lines.push("    : R");
  lines.push("  : unknown;");
  lines.push("");
  lines.push("type OperationArgs<T extends OperationId> = {");
  lines.push("  headers?: HeadersInit;");
  lines.push("} & (OperationSpec<T> extends { parameters: { path: infer P } }");
  lines.push("  ? { path: P }");
  lines.push("  : PathForOperation<T> extends undefined");
  lines.push("    ? { path?: undefined }");
  lines.push("    : { path?: PathForOperation<T> })");
  lines.push("& (QueryForOperation<T> extends undefined");
  lines.push("  ? { query?: undefined }");
  lines.push("  : { query?: QueryForOperation<T> })");
  lines.push("& (OperationSpec<T> extends { requestBody: unknown }");
  lines.push("  ? { body: BodyForOperation<T> }");
  lines.push("  : BodyForOperation<T> extends undefined");
  lines.push("    ? { body?: undefined }");
  lines.push("    : { body?: BodyForOperation<T> });");
  lines.push("");
  for (const operation of operationsList) {
    lines.push(
      `export type ${operation.operationId}Args = OperationArgs<'${operation.operationId}'>;`,
    );
    lines.push(
      `export type ${operation.operationId}Response = ResponseForOperation<'${operation.operationId}'>;`,
    );
  }
  lines.push("");

  return `${lines.join("\n")}\n`;
}

function buildResourcesFile(resources) {
  const lines = [
    "import { BaseClient } from '../base';",
    "import type { ApiResult } from '../types';",
    "import { OPERATION_DEFINITIONS } from './operations';",
    "import type {",
    ...collectOperationTypeImports(resources),
    "} from './operations';",
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
      const argsType = `${operation.operationId}Args`;
      const responseType = `${operation.operationId}Response`;
      const requiresArgs =
        operation.hasRequiredPathParams || operation.hasRequiredBody;
      const signature = requiresArgs
        ? `  ${operation.operationId}(args: ${argsType}): Promise<${responseType}> {`
        : `  ${operation.operationId}(args: ${argsType} = {}): Promise<${responseType}> {`;
      lines.push(signature);
      lines.push(
        `    return this.callOperation<${responseType}>(OPERATION_DEFINITIONS.${operation.operationId}, args);`,
      );
      lines.push("  }");
      lines.push("");
      lines.push(
        requiresArgs
          ? `  ${operation.operationId}WithMeta(args: ${argsType}): Promise<ApiResult<${responseType}>> {`
          : `  ${operation.operationId}WithMeta(args: ${argsType} = {}): Promise<ApiResult<${responseType}>> {`,
      );
      lines.push(
        `    return this.callOperationWithMeta<${responseType}>(OPERATION_DEFINITIONS.${operation.operationId}, args);`,
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

function collectOperationTypeImports(resources) {
  const names = [];
  for (const operationsForResource of Object.values(resources)) {
    for (const operation of operationsForResource) {
      names.push(`  ${operation.operationId}Args,`);
      names.push(`  ${operation.operationId}Response,`);
    }
  }
  return names;
}
