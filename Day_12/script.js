//TASK 1
let numbers = [1,2,3,4,5,6,7,8];
//square numbers using map
let square=numbers.map (n=>n*n)
    console.log(square);
//get odd numbers using filter
let odd=numbers.filter(n=>n%2===1)
    console.log(odd);
//calculate sum using reduce
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);

//TASK 2
//Destructure:

let student = {
    name: "Farah",
    dept: "PUCIT",
    cgpa: 3.8
};
let {name,dept,cgpa}=student;
console.log(name,dept,cgpa);

//TASK 3
//Copy and extend:
let arr1 = [10, 20, 30];
//Add 40, 50 using spread.
let arr2 = [...arr1,40,50];
console.log(arr2);

//TASK 4
//print data
//call callback
function processData(data, callback){
    console.log("Processing",data);
    callback();
}
processData("User Data",()=>{
    console.log("Done!");
});

//TASK 5 (Thinking task )
//Why does React prefer map() instead of for loops when rendering lists?
//React prefers map() because:
//Declarative style
//You describe what you want, not how to loop
//Returns a new array
//Perfect for rendering UI elements
//Cleaner & more readable
//JSX + map() is concise
//Avoids mutation
// React depends on immutability
// Direct mapping: data → UI
// items.map(item => <Card data={item} />)
// One-liner you should remember:
//React uses map() because UI is a transformation of data.