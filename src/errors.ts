import type { TripletexErrorPayload, TripletexResponseMeta } from './types';

export class TripletexRequestError extends Error {
  readonly status: number;
  readonly statusText: string;
  readonly payload: unknown;
  readonly meta: TripletexResponseMeta;
  readonly tripletexError: TripletexErrorPayload | null;

  constructor(
    status: number,
    statusText: string,
    payload: unknown,
    meta: TripletexResponseMeta
  ) {
    const normalized = normalizeTripletexError(payload);
    super(normalized?.message ?? `Tripletex request failed (${status} ${statusText})`);
    this.name = 'TripletexRequestError';
    this.status = status;
    this.statusText = statusText;
    this.payload = payload;
    this.meta = meta;
    this.tripletexError = normalized;
  }
}

function normalizeTripletexError(payload: unknown): TripletexErrorPayload | null {
  if (!payload || typeof payload !== 'object') {
    return null;
  }

  const candidate = payload as Record<string, unknown>;
  if ('message' in candidate || 'code' in candidate || 'developerMessage' in candidate) {
    return candidate as TripletexErrorPayload;
  }

  return null;
}
