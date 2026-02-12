var bulb = document.querySelector("#bulb");
var btn = document.querySelector("#toggleBtn");

btn.addEventListener("click",function(){
    bulb.classList.toggle("on");
    if(bulb.classList.contains("on")){
        btn.textContent="Turn Off";
    }
    else{
        btn.textContent = "Turn On";
    }
});