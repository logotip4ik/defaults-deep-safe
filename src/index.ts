const isObject = (obj: object) => Object.prototype.toString.call(obj) === "[object Object]";

export default function defaultsDeep(target: object, ...objects: object[]): object {
  target = target || {};

  function copy(target: object, current: object) {
    Object.entries(current).forEach(([key, value]) => {
      if (key === "__proto__" || (key === "constructor" && value && value.prototype)) return;

      const val = target[key];

      // add the missing property, or allow a null property to be updated
      if (val == null) target[key] = value;
      else if (isObject(val) && isObject(value)) defaultsDeep(val, value);
    });
  }

  for (let i = 0; i < objects.length; i++) {
    const obj = objects[i];

    if (obj) copy(target, obj);
  }

  return target;
}
