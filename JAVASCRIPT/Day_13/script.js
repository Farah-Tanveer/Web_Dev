let t = document.querySelector("#title");
let p = document.querySelector(".info");
let b = document.querySelector("#btn");
let bd = document.querySelector("#btn2");
let by = document.body;



console.log(t);
console.log(p);
console.log(b);

b.addEventListener("click", function () {
    t.textContent = "Clicked!";
    p.classList.toggle("highlight");
    document.body.style.backgroundColor = "#f0f0f0";
});
bd.addEventListener("click",function(){
    by.classList.toggle("dark");
});

//Why is classList.toggle() better than style for big projects?
//bcz it can toggle a whole class where we can change multiple properties at once.
//What happens if querySelector() returns null?
//it means no such tag id or class exits in index.html
//Why should JS be loaded at the end of <body>?
//JavaScript is loaded at the end so the DOM is fully created before JS tries to access elements.
