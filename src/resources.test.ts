import TripletexClient from './index';

describe('Resource wrappers', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  it('returns transport metadata from generated withMeta methods', async () => {
    const fetchMock = jest.fn().mockResolvedValue(
      new Response(JSON.stringify({ values: [{ id: 1 }] }), {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'x-tlx-request-id': 'req-meta',
          'X-Rate-Limit-Limit': '100',
          'X-Rate-Limit-Remaining': '99',
          'X-Rate-Limit-Reset': '10'
        }
      })
    );
    global.fetch = fetchMock as unknown as typeof fetch;

    const client = new TripletexClient();
    const result = await client.Country_searchWithMeta({
      query: { from: 0, count: 1 }
    });

    expect(result.data).toEqual({ values: [{ id: 1 }] });
    expect(result.meta).toEqual({
      requestId: 'req-meta',
      rateLimitLimit: 100,
      rateLimitRemaining: 99,
      rateLimitReset: 10
    });
  });

  it('creates session token through the recommended POST endpoint', async () => {
    const fetchMock = jest.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          value: {
            token: 'new-session-token',
            expirationDate: '2026-03-10'
          }
        }),
        {
          status: 200,
          headers: {
            'content-type': 'application/json',
            'x-tlx-request-id': 'req-token'
          }
        }
      )
    );
    global.fetch = fetchMock as unknown as typeof fetch;

    const client = new TripletexClient();
    const session = await client.createSessionToken({
      consumerToken: 'consumer',
      employeeToken: 'employee'
    });

    expect(session).toEqual({
      token: 'new-session-token',
      expirationDate: '2026-03-10'
    });
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toContain('/token/session/:create');
    expect(init.method).toBe('POST');
  });
});
