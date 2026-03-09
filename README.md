# tripletex.js

TypeScript SDK for the Tripletex API (production environment).

Default API base URL: `https://tripletex.no/v2`

## Install

```bash
npm install tripletex.js
```

## Quick start

```ts
import TripletexClient from 'tripletex.js';

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

All OpenAPI operations from `docs/openapi.json` are generated into typed method signatures and grouped into resource mixins. Regenerate after spec updates:

```bash
npm run generate:resources
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
