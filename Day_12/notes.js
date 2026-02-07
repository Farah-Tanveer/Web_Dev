//Array methods (stop thinking in loops)
//map() — transform
let nums = [1, 2, 3, 4];

let doubled = nums.map(n => n * 2);
console.log(doubled);   // [2,4,6,8]

//filter() — select
let evens = nums.filter(n => n % 2 === 0);
console.log(evens);   // [2,4]

//reduce() — combine
//Many → one value
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);   // 10

//Destructuring (React default style)
//Object destructuring
let student = {
    name: "Farah",
    dept: "PUCIT",
    cgpa: 3.8
};
let { name, cgpa } = student;
console.log(name, cgpa);

//Array destructuring
let arr = [10, 20, 30];
let [x, y] = arr;
console.log(x, y);

//Spread operator ... (immutability)
//Arrays
let a = [1, 2, 3];
let b = [...a, 4, 5];
console.log(b);

//Objects
let user = { name: "Farah", age: 18 };
let updatedUser = { ...user, age: 19 }; //Don’t modify original data — create new data
console.log(updatedUser);

//Callbacks (async mindset)
function processData(data, callback) {
    console.log("Processing:", data);
    callback();
}
processData("User Data", () => {
    console.log("Done!");
});