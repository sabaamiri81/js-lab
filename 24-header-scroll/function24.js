let header = document.querySelector("header")
let oldScroll = 0

function scrollHeader() {
    if (window.scrollY > oldScroll) {
        header.classList.remove("change");
    } else {
        header.classList.add("change");
        header.style = " transition : 3s "
    }
    oldScroll = window.scrollY
}

window.addEventListener("scroll", scrollHeader);