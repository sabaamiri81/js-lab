// dom nodes
let t = document.querySelector(".up");
let l = document.querySelector(".left");
let d = document.querySelector(".down");
let r = document.querySelector(".right");

// function
function arrowKey(evt){
if(evt.keyCode === 38){
    t.classList.add("shine")
}
if(evt.keyCode === 37){
    l.classList.add("shine")
}
if(evt.keyCode === 40){
    d.classList.add("shine")
}
if(evt.keyCode === 39){
    r.classList.add("shine")
}
}

// event listener
window.addEventListener("keyup", arrowKey);