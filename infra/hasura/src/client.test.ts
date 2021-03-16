import { HasuraClient } from "./client";

test("should be create a hasura client", () => {
  const client = new HasuraClient();
  expect(client).toMatchInlineSnapshot(`
    HasuraClient {
      "activeOperations": Object {},
      "createOperationContext": [Function],
      "createRequestOperation": [Function],
      "dispatchOperation": [Function],
      "executeMutation": [Function],
      "executeQuery": [Function],
      "executeSubscription": [Function],
      "fetch": [Function],
      "fetchOptions": Object {
        "headers": Object {
          "Content-Type": "application/json",
          "x-hasura-admin-secret": "",
        },
      },
      "maskTypename": false,
      "operations$": [Function],
      "preferGetMethod": false,
      "queue": Array [],
      "reexecuteOperation": [Function],
      "requestPolicy": "network-only",
      "results$": [Function],
      "subscribeToDebugTarget": [Function],
      "suspense": false,
      "url": "http://localhost:8080/v1/graphql",
    }
  `);
});
