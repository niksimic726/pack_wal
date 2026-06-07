import test from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/index.js";

test("greets the default audience", () => {
  assert.equal(greet(), "Hello, world!");
});

test("greets a provided name", () => {
  assert.equal(greet("Codex"), "Hello, Codex!");
});

test("falls back when the name is blank", () => {
  assert.equal(greet("   "), "Hello, world!");
});

test("rejects non-string names", () => {
  assert.throws(() => greet(42), {
    name: "TypeError",
    message: "Expected name to be a string."
  });
});
