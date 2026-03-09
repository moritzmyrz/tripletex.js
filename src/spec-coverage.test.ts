import fs from 'node:fs';
import path from 'node:path';

describe('OpenAPI spec coverage', () => {
  it('keeps prod and test operation surfaces aligned', () => {
    const docsDir = resolveDocsDir();
    if (!docsDir) {
      // Some CI/package verification jobs do not include docs/.
      return;
    }

    const prod = JSON.parse(fs.readFileSync(path.join(docsDir, 'openapi-prod.json'), 'utf8'));
    const test = JSON.parse(fs.readFileSync(path.join(docsDir, 'openapi-test.json'), 'utf8'));

    const prodOps = extractOperationSignatures(prod.paths ?? {});
    const testOps = extractOperationSignatures(test.paths ?? {});

    expect(prodOps).toEqual(testOps);
  });
});

function resolveDocsDir(): string | null {
  const candidates = [
    path.join(process.cwd(), 'docs'),
    path.join(__dirname, '..', 'docs')
  ];

  for (const candidate of candidates) {
    const prodPath = path.join(candidate, 'openapi-prod.json');
    const testPath = path.join(candidate, 'openapi-test.json');
    if (fs.existsSync(prodPath) && fs.existsSync(testPath)) {
      return candidate;
    }
  }

  return null;
}

function extractOperationSignatures(paths: Record<string, unknown>): string[] {
  const signatures: string[] = [];
  const methods = ['get', 'post', 'put', 'patch', 'delete'] as const;

  for (const [routePath, routeMethods] of Object.entries(paths)) {
    if (!routeMethods || typeof routeMethods !== 'object') {
      continue;
    }

    const route = routeMethods as Record<string, unknown>;
    for (const method of methods) {
      const operation = route[method];
      if (!operation || typeof operation !== 'object') {
        continue;
      }

      const operationId = (operation as { operationId?: unknown }).operationId;
      if (typeof operationId !== 'string' || operationId.length === 0) {
        continue;
      }

      signatures.push(`${operationId}|${method.toUpperCase()}|${routePath}`);
    }
  }

  signatures.sort();
  return signatures;
}
