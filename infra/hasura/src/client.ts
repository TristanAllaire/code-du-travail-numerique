//
import type { ClientOptions } from "@urql/core";
import { Client } from "@urql/core";
import fetch from "isomorphic-unfetch";

export class HasuraClient extends Client {
  constructor(opts: ClientOptions = {} as ClientOptions) {
    const secret = process.env.HASURA_GRAPHQL_ADMIN_SECRET;
    const url =
      process.env.HASURA_GRAPHQL_ENDPOINT ?? "http://localhost:8080/v1/graphql";

    //

    const headersSecret = secret ? { secret } : {};
    const headers = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "Content-Type": "application/json",
      ...headersSecret,
    };

    const defaultOptions: ClientOptions = {
      fetch,
      fetchOptions: {
        headers,
      },
      requestPolicy: "network-only",
      url,
    };

    super({
      ...defaultOptions,
      ...opts,
    });
  }
}
