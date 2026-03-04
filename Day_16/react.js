/*React — Day 16 Notes
🔹 Topic: Introduction + Components + JSX + useState
1️⃣ What Is React?

React is a JavaScript library for building user interfaces (UI).
It is used to build:
Single Page Applications (SPA)
Dynamic websites
Interactive UIs

Created by: Facebook (Meta)
Core idea: Build UI using reusable components

2️⃣ Why React?
In Vanilla JS:
You manually select elements
You manually update DOM
Code becomes messy in large apps

React uses:
Declarative approach
You describe what UI should look like based on state.

Instead of:
*/
document.querySelector("#text").innerText = "Hello";

/*
You write:
<h1>{text}</h1>

React updates automatically.

3️⃣ What Is a Component?
A component is a function that returns UI.
Example:
*/
function App() {
  return <h1>Hello World</h1>;
}
/*
Component rules:
Must start with capital letter
Must return JSX
Reusable

You can create multiple components:
*/
function Header() {
  return <h1>My Website</h1>;
}

function App() {
  return <Header />;
}
/*
4️⃣ What Is JSX?
JSX = JavaScript XML
It allows writing HTML inside JavaScript.
Example:
*/
const element = <h1>Hello</h1>;
/*
It looks like HTML but it’s not pure HTML.
It gets converted into:
React.createElement(...)

5️⃣ JSX Rules (Important)
✅ Rule 1: Must Return One Parent Element

❌ Wrong:

return (
  <h1>Hello</h1>
  <p>World</p>
);
*/
//✅ Correct:

return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);

/*
OR use Fragment:
<>
  <h1>Hello</h1>
  <p>World</p>
</>

✅ Rule 2: Use className Instead of class
<div className="container"></div>

✅ Rule 3: JavaScript Inside {}
const name = "Farah";

return <h1>Hello {name}</h1>;

You can use:
Variables
Expressions
Ternary operators

Example:
{isLoggedIn ? "Welcome" : "Please Login"}

6️⃣ What Is State?
State = Component’s memory.
State allows:
Dynamic changes
Re-rendering UI automatically
In React, we use:

useState()

7️⃣ useState Hook

Syntax:
import { useState } from "react";
const [value, setValue] = useState(initialValue);


Example:
*/
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
/*
Explanation:
count → current state
setCount → function to update state
0 → initial value

When state changes:
➡ React re-renders the component automatically
8️⃣ Event Handling in React
Events are written in camelCase.
*/
<button onClick={handleClick}>Click</button>

//Example:

function App() {
  const [isOn, setIsOn] = useState(false);

  function toggle() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <h1>{isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>
        Toggle
      </button>
    </div>
  );
}
/*
9️⃣ React Thinking Shift

Old Way:
Select DOM
Change DOM

React Way:
Change state
UI updates automatically

This is called:
Declarative Programming

🔟 Key Terms From Today

React
Component
JSX
State
useState
Re-render
Declarative UI
Event handling

🧠 What You Should Be Able To Do After Day 16

✔ Create a component
✔ Write JSX
✔ Use useState
✔ Handle button click
✔ Update UI dynamically

*/