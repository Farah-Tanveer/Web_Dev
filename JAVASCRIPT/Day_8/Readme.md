# JavaScript Basics and DOM Manipulation Notes

## Overview

This document summarizes several foundational JavaScript concepts demonstrated in the accompanying code. The exercises focus on:

* Arrays
* Loops
* Conditional logic
* Working with 2D arrays (matrices)
* Introduction to the Document Object Model (DOM)

These concepts form the base for writing dynamic JavaScript programs and interacting with web pages.

---

# 1. Arrays in JavaScript

An **array** is a data structure used to store multiple values inside a single variable.

Example:

```javascript
let numbers = [10, 20, 30, 40, 50];
```

In this example:

* `numbers` is an array
* It contains five elements
* Each element is accessed using an **index**

Index positions:

| Index | Value |
| ----- | ----- |
| 0     | 10    |
| 1     | 20    |
| 2     | 30    |
| 3     | 40    |
| 4     | 50    |

Arrays in JavaScript are **zero indexed**, meaning the first element always starts at index `0`.

---

# 2. Loops

Loops allow us to execute a block of code multiple times.

The code uses a **for loop**:

```javascript
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
```

### How the loop works

1. `let i = 0` → initializes the loop counter
2. `i < numbers.length` → loop continues while this condition is true
3. `i++` → increases the counter after each iteration

`numbers.length` automatically gives the size of the array.

This loop prints all elements of the array.

---

# 3. Finding the Sum of Array Elements

The following code calculates the total of all numbers in the array.

```javascript
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
```

Explanation:

* `sum` starts at `0`
* Each iteration adds the current array element
* `+=` is a shorthand for `sum = sum + numbers[i]`

Final output:

```
Sum: 150
```

---

# 4. Finding the Maximum Element

To determine the largest value in the array:

```javascript
let max = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > max)
        max = numbers[i];
}
```

### Logic

1. Assume the first element is the maximum
2. Compare every other element with `max`
3. If a larger number is found, update `max`

Final result:

```
Maximum element: 50
```

This technique is a common **search algorithm pattern**.

---

# 5. Printing Even Numbers

Even numbers are numbers divisible by `2`.

The code checks this condition:

```javascript
if(numbers[i] % 2 === 0)
```

Explanation:

* `%` is the **modulus operator**
* It returns the remainder after division

Examples:

| Expression | Result |
| ---------- | ------ |
| 10 % 2     | 0      |
| 11 % 2     | 1      |

If the remainder is `0`, the number is even.

---

# 6. Two-Dimensional Arrays (Matrix)

A **2D array** represents a table or grid.

Example:

```javascript
let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
```

This structure looks like:

```
1 2 3
4 5 6
7 8 9
```

### Accessing elements

General form:

```
matrix[row][column]
```

Examples:

```
matrix[0][0] → 1
matrix[1][2] → 6
matrix[2][1] → 8
```

---

# 7. Nested Loops

To iterate through a 2D array we use **nested loops**.

```javascript
for(let i = 0; i < 3; i++){
    let row = "";

    for(let j = 0; j < 3; j++){
        row += matrix[i][j] + " ";
    }

    console.log(row);
}
```

Explanation:

* Outer loop → controls rows
* Inner loop → controls columns

This prints the matrix row by row.

---

# 8. Introduction to the DOM (Document Object Model)

When a web page loads in the browser, the HTML is converted into a **DOM Tree**.

The **DOM (Document Object Model)** is a programming interface that allows JavaScript to interact with HTML elements.

It represents the entire webpage as a **tree-like structure of nodes**.

---

# 9. DOM Tree Structure

Example HTML:

```html
<html>
  <body>
    <div class="container">
        <div class="box">Box1</div>
        <div class="box">Box2</div>
    </div>
  </body>
</html>
```

DOM Tree representation:

```
Document
 └── html
      └── body
           └── div.container
                ├── div.box (Box1)
                └── div.box (Box2)
```

Each item in this tree is called a **node**.

Types of nodes include:

* Element nodes (`div`, `body`, `table`)
* Text nodes (text inside elements)
* Comment nodes

---

# 10. Important DOM Properties

### childNodes

Returns **all nodes**, including text nodes.

```javascript
document.body.childNodes
```

Example output:

```
NodeList(9) [text, div, text, script, text]
```

---

### children

Returns only **HTML elements**, ignoring text nodes.

```javascript
document.body.children
```

---

### firstElementChild

Returns the first HTML element inside a parent.

```javascript
document.body.firstElementChild
```

---

### nextElementSibling

Returns the next element at the same level.

```javascript
element.nextElementSibling
```

---

### parentElement

Accesses the parent node.

```javascript
element.parentElement
```

---

# 11. Why the DOM is Important

The DOM is essential because it allows JavaScript to:

### 1. Modify webpage content

Example:

```javascript
document.getElementById("title").innerText = "Hello";
```

### 2. Change styles dynamically

```javascript
element.style.color = "red";
```

### 3. Respond to user actions

Example events:

* button clicks
* typing
* mouse movement

```javascript
button.addEventListener("click", function(){
    console.log("Button clicked");
});
```

### 4. Create dynamic websites

Modern web applications such as:

* dashboards
* social media platforms
* online editors

all rely heavily on DOM manipulation.

---

# Conclusion

The exercises demonstrate several fundamental JavaScript concepts:

* Using arrays to store multiple values
* Iterating over data with loops
* Applying conditions to filter data
* Working with 2D arrays
* Understanding how web pages are represented using the DOM

Mastering these concepts is important because they form the foundation for:

* JavaScript programming
* Frontend development
* Dynamic web applications
