function greet(){
    console.log("Hello","Farah");
}
greet(); //call the function

function add1(a, b) {
    let sum = a + b;
    console.log("Sum:", sum);
}
add1(5, 10); // call with arguments

function multiply(x, y) {
    return x * y;
}
let result = multiply(4, 3);
console.log(result); // 12

let add = (x, y) => x + y;
console.log(add(3, 7)); // 10

let globalVar = 10;
function test() {
    let localVar = 5;
    console.log(globalVar); // 10
    console.log(localVar);  // 5
}
test();
//console.log(localVar); //  Error, not accessible outside

//TASK 1
function greetUser(name){
    console.log("Hello",name);
}
greetUser("Farah");

//TASK 2
function calculate(a,b){
    console.log("Sum",a+b);
    console.log("Difference",a-b);
    console.log("Product",a*b);
    console.log("Divide",a/b);
}
calculate(10,6);

//TASK 3
function averageMarks(m1,m2,m3){
    return (m1+m2+m3)/3;
}
let r=averageMarks(30,40,50);
console.log(r);

//TASK 4
function isEven(n){
    if(n%2===0)
        return true;
    else
        return false;
}
let res=isEven(24);
console.log(res);

//TASK  5
function table(n){
    for(let i=1;i<=10;i++)
        console.log(i,"x",n,"=",i*n);
}
table(13);


