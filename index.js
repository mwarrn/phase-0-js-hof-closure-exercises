function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function map(array, callback) {
  const newArray = [];
  for (element of array) {
    newArray.push(callback(element));
  }
  return newArray;
}

function filter(array, callback) {
  const newArray = [];
  for (element of array) {
    if (callback(element) === true) {
      newArray.push(element);
    }
  }
  return newArray;
}

function every(array, callback) {
  for (element of array) {
    if (callback(element) === false) {
      return false;
    }
  }
  return true;
}

function some(array, callback) {
  for (element of array) {
    if (callback(element) === true) {
      return true;
    }
  }
  return false;
}

function majority(array, callback) {
  const maj = Math.floor((array.length / 2) + 1);
  const newArray = [];

  for (element of array) {
    if (callback(element) === true) {
      newArray.push(element);
    }
  }
  if (newArray.length >= maj) {
    return true;
  }
  else {
    return false;
  }
}

function once(callback) {
  let isCalled = false;
  let value;

  return function(args) {
    if (isCalled) {
      return value;
    }

    isCalled = true;
    value = callback(args);
    return value;
  }
}

function groupBy(array, callback) {
  const object = {};

  for (element of array) {
    let key = callback(element);

    if (object[key]) {
      object[key].push(element);
    } else {
      object[key] = [element];
    }
  }
  return object;
}

function arrayToObject(array, callback) {
  let object = {};

  for (element of array) {
    object[element] = callback(element)
  }
  return object;
}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
