Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }

  return result;
};

const nums = [1, 2, 3, 4, 5];
const doubled = nums.myMap(x => x * 2);
console.log(doubled); 


const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 }
];
const names = users.myMap(user => user.name);
console.log(names); 

const indexed = nums.myMap((value, index) => value + index);
console.log(indexed); 

