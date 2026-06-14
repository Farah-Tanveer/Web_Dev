let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (remainder)

let x = 10;

x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2

let a1 = 10;
let b1 = "10";

console.log(a == b);   // true ->compare onl,y values
console.log(a === b);  // false ->compare value + type

let age = 18;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed");
}

//operator precedence
console.log(10 + 5 * 2); // 20
console.log((10 + 5) * 2); // 30

