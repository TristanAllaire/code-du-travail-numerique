//

export * from "./__generated__";
export * from "./client";

//

export class HasuraError extends Error {
  errors: string[] = [];

  constructor(message?: string) {
    super(message);
    this.errors = message ? [message] : [];
  }

  public static isError = (
    data: HasuraResponse<string, unknown>
  ): data is HasuraError => {
    return "errors" in data && data.errors.length > 0;
  };
}

export type HasuraResponse<TQueryName extends string, TDataType> =
  | HasuraError
  | {
      data: {
        [K in TQueryName]: TDataType;
      };
    };
