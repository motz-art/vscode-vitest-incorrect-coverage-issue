import { test } from "vitest";
import { process } from ".";

test.each([undefined, "x"])("%s", (input) => {
  process(input);
});
