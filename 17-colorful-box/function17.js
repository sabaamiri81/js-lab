// DOM NODES

let thumbs = document.querySelectorAll(".box");

// FUNCTIONS

function random(a, b) {
    return Math.floor(Math.random() * (b - a) + a)
}

function colorfulBox() {
    this.style.backgroundColor = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
}

// events

for (let index = 0; index < thumbs.length; index++) {
    thumbs[index].onclick = colorfulBox;

}

