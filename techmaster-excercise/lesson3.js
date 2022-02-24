// Ex. 1
const myFamily = {
  Joel: 32,
  Fred: 44,
  Reginald: 65,
  Susan: 33,
  Julian: 13,
};

const afterNYears = (obj, n) => {
  const after = {};
  for (const key in obj) {
    after[key] = obj[key] + n;
  }
  return after;
};

console.log(afterNYears(myFamily, 5));

// Ex. 2
const order = {
  Shampoo: 5.99,
  "Rubber Ducks": 15.99,
  "Flatscreen TV": 399.99,
};

const freeShipping = (obj) => {
  let total = 0;
  for (const key in obj) {
    total += obj[key];
  }
  return total >= 50;
};
console.log(freeShipping(order));

// Ex. 3
const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

const nameScore = (name) => {
  let score = 0;
  name = name.toUpperCase();
  for (const letter of name) {
    score += scores[letter];
  }
  if (score <= 60) console.log("NOT TOO GOOD");
  else if (score <= 300) console.log("PRETTY GOOD");
  else if (score <= 599) console.log("VERY GOOD");
  else if (score >= 600) console.log("THE BEST");
};

nameScore("MUBASHIR"); // "THE BEST"
nameScore("YOU"); // "VERY GOOD"
nameScore("MATT"); // "THE BEST"
nameScore("PUBG"); // "NOT TOO GOOD"

// Ex. 4
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const invert = (obj) => {
  const newObj = {};
  for (const key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
};

console.log(invert(obj));

// Ex. 5
const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
};

const totalAmountLost = (obj) => {
  let total = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty("key")) {
      return (total += obj[key]);
    }
  }
  return "Lucky you!";
};

console.log(totalAmountLost(stolenItems));

// Ex. 6
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

const greeting = (name) => {
  for (const key in GUEST_LIST) {
    if (GUEST_LIST.hasOwnProperty(name)) {
      return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[key]}`;
    }

    return "Hi! I'm a guest!";
  }
};

console.log(greeting("Randy"));

// Ex. 7
const persons = {
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29,
};

const oldest = (obj) => {
  const maxAge = [];
  const newPersons = {};
  for (const key in obj) {
    newPersons[obj[key]] = key;
  }
  for (const key in newPersons) {
    maxAge.push(key);
  }
  return newPersons[Math.max(...maxAge)];
};

console.log(oldest(persons));
