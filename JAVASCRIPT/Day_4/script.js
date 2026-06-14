alert("Js is running...") // pops up in browser
//document.write("Hello") → writes directly on page (rarely used)

//TASK 1
let Name=prompt("Enter your name: ");
console.log("hello",Name,"welcome!");

//Task 2
//prompt always returns a string, even if you type a number.
let num1 = Number(prompt("Enter a number:"));
let num2 = Number(prompt("Enter second number:"));

console.log("Sum:",num1+num2);
console.log("Difference:",num1-num2);
console.log("Product:",num1*num2);

//TASK 3
let m1 = Number(prompt("Enter marks:"));
let m2 = Number(prompt("Enter marks:"));
let m3 = Number(prompt("Enter marks:"));
console.log("Total Marks:",m1+m2+m3);
console.log("Average Marks:",(m1+m2+m3)/3);



