//

import type { HasuraResponse } from "./index";
import { HasuraError } from "./index";

test("HasuraResponse<foo, unknown> should not be an Error", () => {
  const x: HasuraResponse<"foo", unknown> = { data: { foo: "bar" } };
  expect(x).toBeDefined(); // Makes TS appy
  expect(HasuraError.isError(x)).toBeFalsy();
});

test("HasuraError('FUU') should be an Error", () => {
  const x: HasuraResponse<"oof", unknown> = new HasuraError("FUU");
  expect(x).toBeDefined(); // Makes TS appy
  expect(HasuraError.isError(x)).toBeTruthy();
  expect(x).toMatchInlineSnapshot(`[Error: FUU]`);
});
