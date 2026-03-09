import { BaseClient } from './base';
import { resourceMixins } from './generated/resources';
import type { GeneratedResourceMixin } from './generated/resources';
import type { CreateSessionTokenBody, SessionToken, TripletexClientConfig } from './types';

class TripletexClient extends BaseClient {
  constructor(config: TripletexClientConfig = {}) {
    super(config);
  }

  async createSessionToken(payload: CreateSessionTokenBody): Promise<SessionToken> {
    const response = await this.request<{ value?: SessionToken; token?: string; expirationDate?: string }>({
      method: 'POST',
      path: '/token/session/:create',
      body: payload
    });

    const token =
      response.value ??
      (response.token
        ? {
            token: response.token,
            expirationDate: response.expirationDate
          }
        : undefined);

    if (!token) {
      throw new Error('Unexpected response payload for createSessionToken');
    }

    this.setSessionToken(token.token);
    return token;
  }

  useSessionToken(sessionToken: string, companyId: number | string = 0): void {
    this.setSessionToken(sessionToken);
    this.setCompanyId(companyId);
  }
}

interface TripletexClient extends GeneratedResourceMixin {}

applyMixins(TripletexClient, resourceMixins as unknown as Array<new (...args: never[]) => unknown>);

export { TripletexClient };
export * from './errors';
export * from './types';
export { TRIPLETEX_PROD_BASE_URL } from './utils';
export default TripletexClient;

function applyMixins(
  derivedCtor: new (...args: never[]) => unknown,
  constructors: Array<new (...args: never[]) => unknown>
): void {
  for (const baseCtor of constructors) {
    for (const name of Object.getOwnPropertyNames(baseCtor.prototype)) {
      if (name !== 'constructor') {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ?? Object.create(null)
        );
      }
    }
  }
}
