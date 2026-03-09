import type { QueryParams, QueryValue, TripletexResponseMeta } from './types';

export const TRIPLETEX_PROD_BASE_URL = 'https://tripletex.no/v2';

export function toQueryString(params?: QueryParams): string {
  if (!params) {
    return '';
  }

  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    appendValue(search, key, value);
  }

  const query = search.toString();
  return query ? `?${query}` : '';
}

export function buildBasicAuth(companyId: number | string, sessionToken: string): string {
  const credentials = `${companyId}:${sessionToken}`;
  return `Basic ${Buffer.from(credentials).toString('base64')}`;
}

export function buildResponseMeta(headers: Headers): TripletexResponseMeta {
  return {
    requestId: headers.get('x-tlx-request-id'),
    rateLimitLimit: parseHeaderInt(headers.get('X-Rate-Limit-Limit')),
    rateLimitRemaining: parseHeaderInt(headers.get('X-Rate-Limit-Remaining')),
    rateLimitReset: parseHeaderInt(headers.get('X-Rate-Limit-Reset'))
  };
}

export function compilePath(
  templatePath: string,
  pathParams?: Record<string, string | number>
): string {
  if (!pathParams) {
    return templatePath;
  }

  return templatePath.replace(/\{([^}]+)\}/g, (_, rawKey: string) => {
    const key = rawKey.trim();
    const value = pathParams[key];
    if (value === undefined || value === null) {
      throw new Error(`Missing required path param: ${key}`);
    }
    return encodeURIComponent(String(value));
  });
}

function appendValue(search: URLSearchParams, key: string, value: QueryValue): void {
  if (value === null || value === undefined) {
    return;
  }

  search.append(key, String(value));
}

function parseHeaderInt(value: string | null): number | null {
  if (!value) {
    return null;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) ? null : parsed;
}
