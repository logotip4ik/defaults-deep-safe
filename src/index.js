const lazy = require("lazy-cache")(require);
lazy("is-extendable", "isObject");
lazy("for-own", "forOwn");

/**
 * Deeply assign defaults
 * @param {object} target
 * @param {object[]} objects
 * @returns {object} deeply assigned object
 */
function defaultsDeep(target = {}, ...objects) {
  if (!target) return {};

  function copy(target, current) {
    lazy.forOwn(current, (value, key) => {
      if (key === "__proto__" || (key === "constructor" && value && value.prototype)) return;

      const val = target[key];

      // add the missing property, or allow a null property to be updated
      if (val == null) target[key] = value;
      else if (lazy.isObject(val) && lazy.isObject(value)) defaultsDeep(val, value);
    });
  }

  for (let i = 0; i < objects.length; i++) {
    const obj = objects[i];

    if (obj) copy(target, obj);
  }

  return target;
}

module.exports = defaultsDeep;
