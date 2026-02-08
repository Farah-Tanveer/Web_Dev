//  4 Pillars of DOM( Document object Model )
// 1.Selection of an element
// 2.Change HTML
// 3.Change CSS
// 4. Event Listener

var a = document.querySelector("#changehtml") //'#' for id and '.' for class
a.addEventListener("click",function(){
    var a1 = document.querySelector("#paragraph")
    a1.innerHTML="Changed Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sapiente earum aliquid perferendis aperiam dolore delectus quibusdam iure aut recusandae ex consectetur, dolorem alias et, sint voluptates numquam aliquam dolorum? ";
});
//a.style.color="red";
var a2 = document.querySelector("#changecss")
var a3 = document.querySelector("body")

a2.addEventListener("click",function(){
    a3.classList.toggle("bdy");
});
