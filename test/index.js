require("should");
const defaultsDeep = require("../src/index");

describe("deep-defaults", () => {
  it("should copy only missing properties defaults", () => {
    defaultsDeep({ a: "c" }, { a: "bbb", d: "c" }).should.eql({
      a: "c",
      d: "c",
    });
  });

  it("should copy properties from multiple objects", () => {
    defaultsDeep({ a: "b" }, { c: "d" }, { e: "f" }).should.eql({
      a: "b",
      c: "d",
      e: "f",
    });
  });

  it("should fill in values that are null", () => {
    defaultsDeep({ a: null }, { a: "c", d: "c" }).should.eql({
      a: "c",
      d: "c",
    });
  });

  it("should copy nested values.", () => {
    defaultsDeep({ a: { b: "c" } }, { a: { d: "e" } }).should.eql({
      a: { b: "c", d: "e" },
    });
  });

  it("should clone when an empty object is passed as the first arg.", () => {
    const obj = {};

    defaultsDeep(obj, { a: { b: "c" } }, { a: { d: "e" } });

    obj.should.eql({ a: { b: "c", d: "e" } });
  });

  it("should return an empty object when the first arg is null.", () => {
    defaultsDeep(null).should.eql({});
  });

  it("should not override Object prototype", () => {
    var payload = JSON.parse('{"constructor": {"prototype": {"isAdmin": true}}}');

    defaultsDeep({}, payload);

    (({}.isAdmin || false).should.eql(false));
  });
});
