
// dom nodes

let blackBoard = document.querySelector("div");
let title = document.querySelector("h1");


// function

function handleEnterPressed(event) {
    if (event.keyCode === 66) {
        blackBoard.classList.add("black")
        title.classList.add("title")
    }
}


// add event listener
window.addEventListener("keyup", handleEnterPressed)