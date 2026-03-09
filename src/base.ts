import { TripletexRequestError } from './errors';
import type {
  ApiResult,
  GeneratedMethodArgs,
  OperationDefinition,
  RequestOptions,
  TripletexClientConfig,
  TripletexListEnvelope,
  TripletexSingleEnvelope
} from './types';
import {
  buildBasicAuth,
  buildResponseMeta,
  compilePath,
  toQueryString,
  TRIPLETEX_PROD_BASE_URL
} from './utils';

export class BaseClient {
  protected readonly baseUrl: string;
  private readonly fetchImpl: typeof fetch;
  private readonly defaultHeaders: HeadersInit;
  private readonly maxRateLimitRetries: number;
  private sessionToken?: string;
  private companyId: number | string;

  constructor(config: TripletexClientConfig = {}) {
    this.baseUrl = trimTrailingSlash(config.baseUrl ?? TRIPLETEX_PROD_BASE_URL);
    this.fetchImpl = config.fetchImpl ?? fetch;
    this.defaultHeaders = config.defaultHeaders ?? {};
    this.maxRateLimitRetries = config.maxRateLimitRetries ?? 1;
    this.sessionToken = config.sessionToken;
    this.companyId = config.companyId ?? 0;
  }

  protected setSessionToken(sessionToken: string): void {
    this.sessionToken = sessionToken;
  }

  protected setCompanyId(companyId: number | string): void {
    this.companyId = companyId;
  }

  protected async request<T>(options: RequestOptions): Promise<T> {
    const result = await this.requestWithMeta<T>(options);
    return result.data;
  }

  protected async requestWithMeta<T>(options: RequestOptions): Promise<ApiResult<T>> {
    const path = options.path.startsWith('/') ? options.path : `/${options.path}`;
    const url = `${this.baseUrl}${path}${toQueryString(options.query)}`;
    const headers = this.mergeHeaders(options.headers);
    const body = options.body === undefined ? undefined : JSON.stringify(options.body);

    const response = await this.fetchWithRateLimitRetry(
      {
        method: options.method ?? 'GET',
        headers,
        body
      },
      url
    );

    const meta = buildResponseMeta(response.headers);
    const parsed = await parseResponseBody(response);

    if (!response.ok) {
      throw new TripletexRequestError(response.status, response.statusText, parsed, meta);
    }

    return { data: parsed as T, meta };
  }

  protected async callOperation<T>(
    operation: OperationDefinition,
    args: GeneratedMethodArgs = {}
  ): Promise<T> {
    return this.request<T>({
      method: operation.method,
      path: compilePath(operation.path, args.path),
      query: args.query,
      body: args.body,
      headers: args.headers
    });
  }

  protected async callOperationWithMeta<T>(
    operation: OperationDefinition,
    args: GeneratedMethodArgs = {}
  ): Promise<ApiResult<T>> {
    return this.requestWithMeta<T>({
      method: operation.method,
      path: compilePath(operation.path, args.path),
      query: args.query,
      body: args.body,
      headers: args.headers
    });
  }

  protected unwrapValue<T>(payload: unknown): T {
    if (payload && typeof payload === 'object' && 'value' in (payload as Record<string, unknown>)) {
      return (payload as TripletexSingleEnvelope<T>).value;
    }
    return payload as T;
  }

  protected unwrapValues<T>(payload: unknown): T[] {
    if (payload && typeof payload === 'object' && 'values' in (payload as Record<string, unknown>)) {
      return (payload as TripletexListEnvelope<T>).values;
    }
    return payload as T[];
  }

  private mergeHeaders(requestHeaders?: HeadersInit): HeadersInit {
    const headers = new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });

    for (const [key, value] of new Headers(this.defaultHeaders).entries()) {
      headers.set(key, value);
    }

    if (this.sessionToken) {
      headers.set('Authorization', buildBasicAuth(this.companyId, this.sessionToken));
    }

    for (const [key, value] of new Headers(requestHeaders).entries()) {
      headers.set(key, value);
    }

    return headers;
  }

  private async fetchWithRateLimitRetry(config: RequestInit, url: string): Promise<Response> {
    let retries = 0;

    // Tripletex gives the remaining period in X-Rate-Limit-Reset.
    while (true) {
      const response = await this.fetchImpl(url, config);
      if (response.status !== 429 || retries >= this.maxRateLimitRetries) {
        return response;
      }

      const resetSeconds = Number.parseInt(response.headers.get('X-Rate-Limit-Reset') ?? '', 10);
      const waitMs = Number.isNaN(resetSeconds)
        ? 1000
        : Math.max(1000, (resetSeconds * 1000) + 100);
      retries += 1;
      await wait(waitMs);
    }
  }
}

async function parseResponseBody(response: Response): Promise<unknown> {
  if (response.status === 204) {
    return null;
  }

  const contentType = response.headers.get('content-type') ?? '';
  const textBody = await response.text();

  if (!textBody) {
    return null;
  }

  if (contentType.includes('application/json')) {
    return JSON.parse(textBody);
  }

  return textBody;
}

function trimTrailingSlash(value: string): string {
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
