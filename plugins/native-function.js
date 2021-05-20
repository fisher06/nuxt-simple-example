const nativeFunction = {};

/*
[Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length
*/
/*
  Only for Object Array
*/
nativeFunction.isEmpty = function(data) {
  if (data == null) {
    return true;
  }

  if (data.constructor && data.constructor.name === 'Array') {
    return !data.length;
  } else if (data.constructor && data.constructor.name === 'Object') {
    return Object.keys(data).length === 0;
  } else if (data.constructor && data.constructor.name === 'String') {
    return !data.length;
  } else {
    return false;
  }
};

nativeFunction.uniqBy = function(arr, predicate) {
  const cb = typeof predicate === 'function' ? predicate : o => o[predicate];
  return [
    ...arr
      .reduce((map, item) => {
        const key = item === null || item === undefined ? item : cb(item);
        map.has(key) || map.set(key, item);
        return map;
      }, new Map())
      .values()
  ];
};

nativeFunction.get = function(obj, path, defaultValue) {
  const result = String.prototype.split
    .call(path, /[,[\].]+?/)
    .filter(Boolean)
    .reduce((res, key) => {
      return res !== null && res !== undefined ? res[key] : res;
    }, obj);
  return result === undefined || result === obj ? defaultValue : result;
};

nativeFunction.filter = function(array, Iteratee) {
  if (this.isEmpty(array)) {
    return false;
  }
  let filteredArray = {};
  filteredArray = array.filter(Iteratee);
  return filteredArray;
};

export default function(ctx, inject) {
  inject('nativeFunction', nativeFunction);
}
