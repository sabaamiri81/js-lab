let flag = true

function first() {
    let big = document.getElementById("main__img");
    let text = document.getElementById("main__p");
    let border = document.getElementById("cards__first")

    big.setAttribute("src", "./images/car1.webp");
    text.textContent = "X";
    if (flag === true) {
        border.style.border = "yellow 6px solid"
        flag = false
    } else {
        border.style.border = "white 1px solid"
        flag = true
    }
}

function second() {
    let big = document.getElementById("main__img");
    let text = document.getElementById("main__p");
    let border = document.getElementById("cards__second")



    big.setAttribute("src", "./images/car2.webp");
    text.textContent = "A";
    if (flag === true) {
        border.style.border = "yellow 6px solid"
        flag = false
    } else {
        border.style.border = "white 1px solid"
        flag = true
    }

}
function third() {
    let big = document.getElementById("main__img");
    let text = document.getElementById("main__p");
    let border = document.getElementById("cards__third")



    big.setAttribute("src", "./images/car3.webp");
    text.textContent = "Z";
    if (flag === true) {
        border.style.border = "yellow 6px solid"
        flag = false
    } else {
        border.style.border = "white 1px solid"
        flag = true
    }

}
function fourth() {
    let big = document.getElementById("main__img");
    let text = document.getElementById("main__p");
    let border = document.getElementById("cards__fourth")



    big.setAttribute("src", "./images/car4.webp");
    text.textContent = "R";
    if (flag === true) {
        border.style.border = "yellow 6px solid"
        flag = false
    } else {
        border.style.border = "white 1px solid"
        flag = true
    }

}

function fifth() {
    let big = document.getElementById("main__img");
    let text = document.getElementById("main__p");
    let border = document.getElementById("cards__fifth")



    big.setAttribute("src", "./images/car5.jpg");
    text.textContent = "T";
    if (flag === true) {
        border.style.border = "yellow 6px solid"
        flag = false
    } else {
        border.style.border = "white 1px solid"
        flag = true
    }

}