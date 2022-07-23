import defaultsDeep from "../dist/index.mjs";

import { strict, deepStrictEqual } from "assert";

export function ShouldCopyOnlyMissingPropertiesDefaults() {
  const res = defaultsDeep({ a: "c" }, { a: "bbb", d: "c" });
  const shouldBe = { a: "c", d: "c" };

  deepStrictEqual(res, shouldBe);
}

export function ShouldCopyPropertiesFromMultipleObjects() {
  const res = defaultsDeep({ a: "b" }, { c: "d" }, { e: "f" });
  const shouldBe = { a: "b", c: "d", e: "f" };

  deepStrictEqual(res, shouldBe);
}

export function ShouldFillInValuesThatAreNull() {
  const res = defaultsDeep({ a: null }, { a: "c", d: "c" });
  const shouldBe = {
    a: "c",
    d: "c",
  };

  deepStrictEqual(res, shouldBe);
}

export function ShouldCopyNestedValues() {
  const res = defaultsDeep({ a: { b: "c" } }, { a: { d: "e" } });
  const shouldBe = {
    a: { b: "c", d: "e" },
  };

  deepStrictEqual(res, shouldBe);
}

export function ShouldCloneWhenAnEmptyObjectIsPassedAsTheFirstArg() {
  const obj = {};
  const res = { a: { b: "c", d: "e" } };

  defaultsDeep(obj, { a: { b: "c" } }, { a: { d: "e" } });

  deepStrictEqual(obj, res);
}

export function ShouldReturnAnEmptyObjectWhenTheFirstArgIsNull() {
  const shouldBe = {};
  const res = defaultsDeep(null);

  deepStrictEqual(res, shouldBe);
}

export function defaultsDeepTesting() {
  const payload = JSON.parse('{"constructor": {"prototype": {"isAdmin": true}}}');

  defaultsDeep({}, payload);

  strict.strictEqual({}.isAdmin || false, false);
}
