// ========================================
// 8️⃣ Async Basics
// ========================================
/* 🧠 First: What Is “Async”?

JavaScript normally runs line by line, top to bottom.

Example:
*/
console.log("A");
console.log("B");
console.log("C");
/*
Output:
A
B
C

⏳ Now See This:
*/
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");
/*
What do you think prints first?
It prints:
A
C
B
WHY?
Because setTimeout is asynchronous.
It says:
“Wait 2 seconds, then run this.”
But JS does NOT stop everything and wait.
It continues running the next line.

💡 Simple Definition

Async means:

“Start something now, finish it later.”
=======================================
📦 Real-Life Example
=======================================
Imagine ordering food 🍕

You:
Order pizza
Continue talking
Pizza arrives later
You didn’t freeze in place waiting for it.
That’s async.

🔄 Now Let’s Understand fetch()
*/
fetch("https://api.example.com")
/*
What happens?
JS sends request to server
Server takes time to respond
Meanwhile JS keeps running other code
When response arrives → .then() runs.

=======================================
🧩 Promise Explained Simply
=======================================

A Promise is like a delivery receipt.
It says:
I will give you data
But not right now
It has 3 states:
Pending ⏳
Fulfilled ✅
Rejected ❌
========================================
🔥 Example Without Confusion
========================================
*/
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received!");
    }, 2000);
});

promise.then(data => {
    console.log(data);
});
/*
After 2 seconds:
Data received!
========================================
🚀 Now The Modern Way (async/await)
========================================
Instead of:
*/
fetch("url")
    .then(res => res.json())
    .then(data => console.log(data));
/*
We write:*/
async function getData() {
    let response = await fetch("url");
    let data = await response.json();
    console.log(data);
}
getData();
/*
Much cleaner.
🧠 What await Does
It says:
“Pause this function until this finishes.”

Important:
It only pauses inside the async function.
It does NOT freeze the entire program.
Advanced async comes later.

💪 Quick Confidence Test*/
console.log("Start");

setTimeout(() => {
    console.log("Inside");
}, 0);

console.log("End");

/*
it prints:
Start End Inside
*/