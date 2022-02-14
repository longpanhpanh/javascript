const arr = [1, 2, 3, 4, 5];

// Ex. 1
const sumAvg = (arr) => {
  const sum = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  return sum / arr.length;
};

console.log(sumAvg(arr));

// Ex. 2
const findMax = (arr) => {
  return Math.max(...arr);
};
console.log(findMax(arr));

// Ex. 3

const fibonacci = (number, callback) => {
  let fiboArr = [];
  for (let i = 0; i <= number; i++) {
    let fiboNumber = callback(i);
    fiboArr.push(fiboNumber);
  }
  return fiboArr;
};

const fiboArr = fibonacci(5, (n) => {
  let a = 1,
    b = 0,
    temp;
  while (n > 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b;
});

console.log(fiboArr);

// Ex. 4
const booleanArr = [true, 0, false, NaN, undefined, null, 1, 5, "Hello"];

const removeFalsy = (arr) => {
  return arr.filter((item) => Boolean(item) === true);
};
console.log(removeFalsy(booleanArr));

// Ex. 5
const matrix = [
  [1, "AA"],
  [7, "BB"],
  [6, "CC"],
  [2, "DD"],
];
const sortByColumn = (arr) => {
  arr.sort((a, b) => {
    return a[0] - b[0];
  });
  return arr;
};

console.log(sortByColumn(matrix));

// Ex. 6
const double = (arr) => {
  const doubled = arr.map((item) => (item *= item));
  return doubled;
};

console.log(double(arr));

// Ex.7
const capitalized = (str) => {
  let result = "";
  const strArr = str.split(" ");
  for (let item of strArr) {
    item = item[0].toUpperCase() + item.slice(1);
    result += item + " ";
  }
  return result.trim();
};

console.log(capitalized("hello world"));

// Ex. 8
const randItem = (arr) => {
  let randIndex = Math.floor(Math.random() * (arr.length - 1));
  return arr[randIndex];
};

console.log(randItem(arr));
