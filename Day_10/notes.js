//Concept 1: Objects in JavaScript

//Think of objects as:
//key → value pairs

let student = {
    name: "Farah",
    age: 18,
    department: "PUCIT",
    isStudent: true
};
console.log(student);

//Accessing Object Data
//Dot notation
console.log(student.name);
console.log(student.age);

//Bracket notation
console.log(student["department"]);

//Modifying Objects
student.age = 19;
student.cgpa = 3.8;
console.log(student);

//Concept 2: Object Methods
let user = {
    username: "admin",
    login() {
        console.log("User logged in");
    }
};
user.login();

//Concept 3: Looping through Objects
let person = {
    name: "Ali",
    age: 20,
    city: "Lahore"
};
for (let key in person) {
    console.log(key, ":", person[key]);
}

// Concept 4: JSON (Very Important)
//JSON = data format, not JS code.

let jsonData = {
    "name": "Farah",
    "age": 18,
    "skills": ["C++", "JS"]
};

//Convert object → JSON string
let jsonString = JSON.stringify(jsonData);
console.log(jsonString);

//Convert JSON string → object
let parsed = JSON.parse(jsonString);
console.log(parsed.name);