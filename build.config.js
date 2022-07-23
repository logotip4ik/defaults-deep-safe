import { defineBuildConfig } from "unbuild";

module.exports = defineBuildConfig({
  entries: ["./src/index"],
  clean: true,
  declaration: true,
});
