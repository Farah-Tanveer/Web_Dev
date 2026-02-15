// ========================================
// 1️⃣ Arrow Functions (Modern JS)
// ========================================

// Old way
function add(a, b) {
    return a + b;
}

// Modern arrow function
const addModern = (a, b) => {
    return a + b;
};

// Short arrow function
const addShort = (a, b) => a + b;


// ========================================
// 2️⃣ Destructuring
// ========================================

// Array Destructuring
let arr = [10, 20];

let [a, b] = arr;

console.log(a); // 10
console.log(b); // 20


// Object Destructuring
let user = {
    name: "Farah",
    age: 22
};

let { name, age } = user;

console.log(name); // Farah
console.log(age);  // 22


// ========================================
// 3️⃣ Spread Operator (...)
// ========================================

// Copying arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]

// Copying objects
let user1 = { name: "Farah" };

let newUser = { ...user1, age: 22 };

console.log(newUser); 
// { name: "Farah", age: 22 }


// ========================================
// 4️⃣ map() Function
// ========================================

let numbers = [1, 2, 3];

let doubled = numbers.map(num => num * 2);

console.log(doubled); 
// [2, 4, 6]


// ========================================
// 5️⃣ filter() Function
// ========================================

let nums = [10, 20, 30, 40];

let result = nums.filter(num => num > 20);

console.log(result); 
// [30, 40]


// ========================================
// 6️⃣ Ternary Operator
// ========================================

let ageCheck = 19;

let message = ageCheck > 18 ? "Adult" : "Minor";

console.log(message);


// ========================================
// 7️⃣ Template Literals
// ========================================

let username = "Farah";

console.log(`Hello ${username}`);


// ========================================
// 8️⃣ Async Basics
// ========================================

// setTimeout example
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);


// Promise + fetch example
fetch("https://api.example.com")
    .then(res => res.json())
    .then(data => console.log(data));
