//TASK 1
let n=Number(prompt("Enter a number:"));
if(n%2===0)
    console.log("Number is Even");
else
    console.log("Number is odd");

//TASK 2
let m=Number(prompt("Enter a number:"));
if(m>=50)
    console.log("Pass");
else
    console.log("Fail");

//TASK 3
let marks=Number(prompt("Enter a number:"));
if(marks>=85)
    console.log("A");
else if(marks>=70)
    console.log("B");
else if(marks>=50)
    console.log("C");
else
    console.log("Fail");

//TASK 4
let username = "admin";
let password = "1234";
let un=prompt("Enter your username");
let ps=prompt("Enter your password");
if(username===un && password===ps)
        console.log("Login Successful!");
else
    console.log("Invaild Credentials");

