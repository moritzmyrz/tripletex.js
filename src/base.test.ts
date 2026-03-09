import TripletexClient, { TripletexRequestError } from './index';

describe('Base transport behavior', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  it('sends basic auth and compiles path/query parameters', async () => {
    const fetchMock = jest.fn().mockResolvedValue(
      new Response(JSON.stringify({ value: { id: 123 } }), {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'x-tlx-request-id': 'req-1'
        }
      })
    );
    global.fetch = fetchMock as unknown as typeof fetch;

    const client = new TripletexClient({
      sessionToken: 'session-token',
      companyId: 42
    });

    await client.Company_get({
      path: { id: 123 },
      query: { fields: 'id,name' }
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toContain('/company/123');
    expect(url).toContain('fields=id%2Cname');
    expect(new Headers(init.headers).get('authorization')).toBe(
      `Basic ${Buffer.from('42:session-token').toString('base64')}`
    );
  });

  it('throws typed error with request metadata on non-2xx responses', async () => {
    const fetchMock = jest.fn().mockImplementation(async () =>
      new Response(
        JSON.stringify({
          status: 401,
          code: 3000,
          message: 'Unauthorized',
          developerMessage: 'Session token is invalid',
          requestId: 'req-401'
        }),
        {
          status: 401,
          statusText: 'Unauthorized',
          headers: {
            'content-type': 'application/json',
            'x-tlx-request-id': 'req-401'
          }
        }
      )
    );
    global.fetch = fetchMock as unknown as typeof fetch;

    const client = new TripletexClient();
    await expect(client.Country_search()).rejects.toMatchObject({
      status: 401,
      tripletexError: {
        code: 3000
      },
      meta: {
        requestId: 'req-401'
      }
    });
    await expect(client.Country_search()).rejects.toBeInstanceOf(TripletexRequestError);
  });

  it('wraps fetch transport failures in typed request errors', async () => {
    const fetchMock = jest.fn().mockRejectedValue(new Error('connect ECONNREFUSED'));
    global.fetch = fetchMock as unknown as typeof fetch;

    const client = new TripletexClient();
    await expect(client.Country_search()).rejects.toMatchObject({
      status: 0,
      statusText: 'Request failed before receiving a response',
      message: 'connect ECONNREFUSED'
    });
    await expect(client.Country_search()).rejects.toBeInstanceOf(TripletexRequestError);
  });

  it('wraps invalid JSON responses in typed request errors', async () => {
    const fetchMock = jest.fn().mockResolvedValue(
      new Response('not-json', {
        status: 200,
        statusText: 'OK',
        headers: {
          'content-type': 'application/json',
          'x-tlx-request-id': 'req-bad-json'
        }
      })
    );
    global.fetch = fetchMock as unknown as typeof fetch;

    const client = new TripletexClient();
    await expect(client.Country_search()).rejects.toMatchObject({
      status: 200,
      statusText: 'OK',
      message: expect.stringContaining('JSON')
    });
    await expect(client.Country_search()).rejects.toBeInstanceOf(TripletexRequestError);
  });
});
