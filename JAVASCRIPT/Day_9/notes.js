//Strings in JS
let name = "Farah";
let dept = 'PUCIT';

//Strings can use double or single quotes
//Strings are immutable (cannot be changed directly)

// String Length
let msg = "Hello JavaScript";
console.log(msg.length); // counts spaces too

//Access Characters (like arrays)
let s = "HELLO";
console.log(s[0]); // H
console.log(s[4]); // O

//Common String Methods
let str = "JavaScript";
console.log(str.toUpperCase()); // JAVASCRIPT
console.log(str.toLowerCase()); // javascript

//Substring
let text = "Programming";
console.log(text.slice(0, 7)); // Program

//Check existence
let sentence = "I love JavaScript";
console.log(sentence.includes("love")); // true

//Split & Join (VERY important)
let line = "HTML CSS JS";
let arr = line.split(" ");
console.log(arr); // ["HTML","CSS","JS"]

let joined = arr.join("-");
console.log(joined); // HTML-CSS-JS

//String Concatenation
let first = "Farah";
let last = "Tanveer";

console.log(first + " " + last);

//Template literals (modern JS)
console.log(`Hello ${first} ${last}`);

// Strings + Loops
let word = "CODE";
for(let i=0; i<word.length; i++){
    console.log(word[i]);
}