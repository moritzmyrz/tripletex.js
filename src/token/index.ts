import { BaseClient } from '../base';
import type { CreateSessionTokenBody, SessionToken } from '../types';

export class SessionTokenResource extends BaseClient {
  async createSessionToken(payload: CreateSessionTokenBody): Promise<SessionToken> {
    const response = await this.request<{ value?: SessionToken; token?: string; expirationDate?: string }>({
      method: 'POST',
      path: '/token/session/:create',
      body: payload
    });

    if (response && typeof response === 'object' && 'value' in response && response.value) {
      return response.value;
    }

    if (response && typeof response === 'object' && 'token' in response) {
      return {
        token: String(response.token),
        expirationDate:
          'expirationDate' in response && typeof response.expirationDate === 'string'
            ? response.expirationDate
            : undefined
      };
    }

    throw new Error('Unexpected response payload for createSessionToken');
  }
}
