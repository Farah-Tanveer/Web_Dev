/*Why Do We Even Export / Import?

In React (and modern JS), we split code into multiple files.
Example:
App.jsx
Header.jsx
Button.jsx

To use code from one file inside another, we use:
export
import

Think of it like:
Export = making something available
Import = bringing it into another file

🟢 1️⃣ Default Export
A file can have only ONE default export.

Example
📁 Header.jsx
function Header() {
  return <h1>My Website</h1>;
}

export default Header;

Now in another file:
📁 App.jsx
import Header from "./Header";
function App() {
  return <Header />;
}
export default App;

Important Rules for Default Export
No curly braces {} when importing
You can rename it to anything

Example:
import MyHeader from "./Header";

Even though original name is Header, this still works.
Because default export does not depend on the name.

🟢 2️⃣ Named Export

A file can have multiple named exports.
📁 math.js
export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}

Now import like this:
import { add, subtract } from "./math";

Important Rules for Named Export
Must use {} while importing
Must match exact name
Can export many things from same file

If you rename, you must use:
import { add as addition } from "./math";


Most React components use default export:
export default App;

But hooks or utilities often use named export:
export function formatDate() {}
export function calculateAge() {}

🔥 Advanced (But Useful)
You can mix both in one file:
export default function App() {}
export const name = "Farah";
export const age = 21;

Then import like:
import App, { name, age } from "./App";

Notice:
Default first
Then named inside {}

🧠 Mental Trick to Remember

If you see:
import Something from ...

👉 That’s default.

If you see:
import { Something } from ...

👉 That’s named.*/