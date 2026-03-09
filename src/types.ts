export type QueryValue = string | number | boolean | null | undefined;

export type QueryParams = Record<string, QueryValue>;

export interface TripletexClientConfig {
  consumerToken?: string;
  employeeToken?: string;
  sessionToken?: string;
  companyId?: number | string;
  baseUrl?: string;
  defaultHeaders?: HeadersInit;
  fetchImpl?: typeof fetch;
  maxRateLimitRetries?: number;
}

export interface TripletexErrorPayload {
  status?: number;
  code?: number;
  message?: string;
  link?: string;
  developerMessage?: string;
  validationMessages?: Array<{ field?: string; message?: string }>;
  requestId?: string;
}

export interface TripletexListEnvelope<T> {
  fullResultSize?: number;
  from?: number;
  count?: number;
  versionDigest?: string;
  values: T[];
}

export interface TripletexSingleEnvelope<T> {
  value: T;
}

export interface TripletexResponseMeta {
  requestId: string | null;
  rateLimitLimit: number | null;
  rateLimitRemaining: number | null;
  rateLimitReset: number | null;
}

export interface ApiResult<T> {
  data: T;
  meta: TripletexResponseMeta;
}

export interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  query?: QueryParams;
  body?: unknown;
  headers?: HeadersInit;
}

export interface CreateSessionTokenBody {
  consumerToken: string;
  employeeToken: string;
  expirationDate?: string;
}

export interface SessionToken {
  token: string;
  expirationDate?: string;
}

export interface GeneratedMethodArgs {
  path?: Record<string, string | number>;
  query?: QueryParams;
  body?: unknown;
  headers?: HeadersInit;
}

export interface OperationDefinition {
  operationId: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
}
