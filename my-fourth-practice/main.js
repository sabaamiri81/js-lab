// dom nodes
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let btn = document.querySelector("button");
// function
function changeImage() {
   let saba= img1.getAttribute("src");
   let aylar= img2.getAttribute("src");

    img1.setAttribute("src", aylar);
    img2.setAttribute("src", saba);  
};
// event listener
btn.addEventListener("click", changeImage);



// with shuffle