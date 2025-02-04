let shoppingCart = [
  { id: 1, name: "LapTop", price: 12_000_000 },
  { id: 2, name: "Phone", price: 7_000_000 },
  { id: 3, name: "CoolPad", price: 500_000 },
];

shoppingCart.forEach((item) => console.log(item));

let findID = shoppingCart.find((item) => item.id == 1);
// { id: 1, name: "LapTop", price: 12_000_000 },

let findName = shoppingCart.find((item) => item.name == "Phone");
console.log(findName);
// // {id: 2, name: 'Phone', price: 7000000}

console.log(findName.price);
// 7000000

// ------------------------------------------
// // Arrow Functons
function sum(a, b) {
  return a + b;
}
console.log("sum=", sum(2, 5));

const sum2 = (a, b = 8) => {
  return a + b;
};
console.log("sum2=", sum2(3));
//11   a=3   defult value of b = 8
// ------------------------------------------
// Rest Operation
function sum3(a, b, c) {
  console.log(arguments);
}
sum3(1, 2, 3, 4, 5, 6);
// Arguments(6) [1, 2, 3, 4, 5, 6,]

let Args = (a, b, c, ...args) => {
  return args; //return an Array[]
};
console.log(Args(1, 2, 3, 4, 5, 6));
// (3) [4, 5, 6]
// ...args must be last parameter

let Args2 = (...args) => args;
console.log(Args2(1, 2, 3, 4, 5, 6));
// (6) [1, 2, 3, 4, 5, 6]

let SumArgs = (...args) => {
  // let sum1 = 0;
  // args.forEach((item) => (sum += item));
  let sum2 = args.reduce((preve, even) => preve + even);
  return sum2;
};
console.log(SumArgs(1, 2, 3, 4, 5, 6, 7, 8)); //36

// // ------------------------------------------*********
let Users = ["amir", "ali", "hasan", "omid"];
const showusers = (Array) => {
  console.log(Array[0], Array);
};
showusers(Users);
//Return Array      (4)  ['amir', 'ali', 'hasan', 'omid']

let Users2 = ["amir", "ali", "hasan", "omid"];
const showusers2 = (...Array) => {
  console.log(Array[0], ...Array);
};
showusers2(...Users);
//Return values      amir ali hasan omid
// // ------------------------------------------
// Arraey Destructuring
let ArrayData = ["54", "ali", true, 53, 43.6];
// let item1 = ArrayData[0]
// let item2 = ArrayData[1]
// let item3 = ArrayData[2]

let [item1, item2, item3, ...other] = ArrayData;
console.log(item1, item2, item3, other);
// 54 ali true    (2)[53, 43.6]
console.log(item1, item2, item3, ...other);
//  54 ali true 53 43.6
// let [item1, , item3, ...other] = ArrayData; //Ignore item2
console.log(item1, item3, ...other);
// 54 true 53 43.6          "ali" dosnt exist!
// -----------Defualt values in Array destructuring-----------
const Nubers = (num1, num2) => {
  return [num1, num2];
};
let [a, b = 5] = Nubers(30, 40); //default value of b=5
console.log(a, b);
// 10 35
let [c, d = 6] = Nubers(13); //default value of d=6
console.log(c, d);
// 10 6
