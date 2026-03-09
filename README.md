# tripletex.js

TypeScript SDK for the Tripletex API.

Default API base URL: `https://tripletex.no/v2` (prod)

## Install

```bash
npm install @moritzmyrz/tripletex.js
```

## Quick start

```ts
import TripletexClient from '@moritzmyrz/tripletex.js';

const client = new TripletexClient();

const session = await client.createSessionToken({
  consumerToken: process.env.TRIPLETEX_CONSUMER_TOKEN!,
  employeeToken: process.env.TRIPLETEX_EMPLOYEE_TOKEN!,
});

client.useSessionToken(session.token, 0);

const customers = await client.Customer_search({
  query: { from: 0, count: 100, fields: 'id,name' },
});
```

Use test environment by setting `environment: 'test'`:

```ts
const client = new TripletexClient({
  environment: 'test',
});
```

TypeScript infers request and response types per operation directly from the OpenAPI spec:

```ts
const company = await client.Company_get({
  path: { id: 123 },
  query: { fields: 'id,name' },
});
// company is typed as ResponseWrapperCompany
```

## Typed usage cookbook

```ts
import TripletexClient from '@moritzmyrz/tripletex.js';

const client = new TripletexClient({
  sessionToken: process.env.TRIPLETEX_SESSION_TOKEN!,
  companyId: 0,
});

// 1) Get one by id (required path params are enforced)
const activity = await client.Activity_get({
  path: { id: 123 },
});

// 2) Search/list (query keys are operation-specific)
const customers = await client.Customer_search({
  query: {
    from: 0,
    count: 100,
    fields: 'id,name',
    isInactive: false,
  },
});

// 3) Create/update (required body is enforced)
await client.Company_put({
  body: {
    id: 1,
  },
});

// 4) Access transport metadata when needed
const withMeta = await client.Country_searchWithMeta({
  query: { count: 10 },
});
console.log(withMeta.meta.requestId);
```

For query arrays, repeat the same query key by passing an array value:

```ts
await client.Contact_search({
  query: {
    id: ['1', '2', '3'],
  },
});
```

## Authentication

Tripletex expects Basic auth where username is `companyId` (or `0`) and password is `sessionToken`.
This client handles that for you after `useSessionToken()` or `createSessionToken()`.

The recommended session-token endpoint is used:
- `POST /token/session/:create`

## Pagination and envelope handling

List endpoints usually accept:
- `from`
- `count`
- `sorting`
- `fields`

The API often wraps payloads in `value` or `values`. The generated endpoint methods return the raw payload from Tripletex so you can inspect all envelope fields, including paging metadata.

## Rate limits and retries

Tripletex returns:
- `X-Rate-Limit-Limit`
- `X-Rate-Limit-Remaining`
- `X-Rate-Limit-Reset`

For `429` responses, the base transport retries automatically up to `maxRateLimitRetries` (default `1`) using `X-Rate-Limit-Reset` as delay guidance.

## Response metadata

Every `*WithMeta` method returns:
- payload (`data`)
- transport metadata (`meta`) including:
  - `requestId` (`x-tlx-request-id`)
  - rate-limit headers

## Full API surface

All OpenAPI operations from the OpenAPI specs are generated into typed method signatures and grouped into resource mixins:
- each method has operation-specific `path`, `query`, and `body` argument types
- required path/body parameters are enforced at compile time
- each method returns the exact success payload type from the spec

Regenerate from production spec:

```bash
npm run generate:resources
```

Regenerate from test spec:

```bash
npm run generate:resources:test
```

## Development

```bash
npm install
npm run generate:resources
npm run check
npm run build
```

## References

- [Tripletex developer documentation](https://developer.tripletex.no/docs/documentation/)
