let shoppingCart = [
  { id: 1, name: "LapTop", price: 12_000_000 },
  { id: 2, name: "Phone", price: 7_000_000 },
  { id: 3, name: "CoolPad", price: 500_000 },
];

// shoppingCart.forEach((item) => console.log(item));

// let findID = shoppingCart.find((item) => item.id == 1);
// // { id: 1, name: "LapTop", price: 12_000_000 },

// let findName = shoppingCart.find((item) => item.name == "Phone");
// console.log(findName);
// // {id: 2, name: 'Phone', price: 7000000}

// console.log(findName.price);
// 7000000

// ------------------------------------------
// // Arrow Functons
// function sum(a, b) {
//   return a + b;
// }
// console.log("sum=", sum(2, 5));

// const sum2 = (a, b = 8) => {
//   return a + b;
// };
// console.log("sum2=", sum2(3));
// //11   a=3   defult value of b = 8
// ------------------------------------------
// Rest Operation
function sum(a, b, c) {
  console.log(arguments);
}
sum(1, 2, 3, 4, 5, 6);
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

// ------------------------------------------
