// TASK 1
let items = document.querySelectorAll("#fruits li");

// Loop over all li items and change color
items.forEach((item, index) => {
    item.style.color = "green";
    item.style.fontWeight = "bold";
    item.textContent += ` (${index + 1})`; // add index
});

// TASK 2
let list = document.querySelector("#fruits");

let newFruit = document.createElement("li"); // create a new li
newFruit.textContent = "Pineapple";
newFruit.style.color = "orange";

list.appendChild(newFruit); // add it to the ul

// TASK 3
let lastItem = list.querySelector("li:last-child");
lastItem.remove(); // deletes the last fruit

// TASK 4
list.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.style.textDecoration = "line-through"; // mark as done
    }
});

// TASK 5
let img = document.querySelector("#myImg");
let btn = document.querySelector("#toggleImg");

btn.addEventListener("click", () => {
    if(img.getAttribute("src") === "bulb-off.png"){
        img.setAttribute("src", "bulb-on.png");
    } else {
        img.setAttribute("src", "bulb-off.png");
    }
});
