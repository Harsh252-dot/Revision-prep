Array.prototype.myFilter = function (callback, thisArg) {

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }

  return result;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = nums.myFilter(x => x % 2 === 0);
console.log(evens);


const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Phone', price: 699, inStock: false },
  { name: 'Tablet', price: 499, inStock: true }
];

const available = products.myFilter(
  p => p.inStock && p.price < 800
);

console.log(available);

