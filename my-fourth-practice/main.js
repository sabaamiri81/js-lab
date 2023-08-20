// dom nodes
// let img1 = document.getElementById("img1");
// let img2 = document.getElementById("img2");
// let btn = document.querySelector("button");
// function
// function changeImage() {
//    let saba= img1.getAttribute("src");
//    let aylar= img2.getAttribute("src");

//     img1.setAttribute("src", aylar);
//     img2.setAttribute("src", saba);  
// };
// event listener
// btn.addEventListener("click", changeImage);



// with shuffle

// / dom nodes
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let btn = document.querySelector("button");
// function
function changeImage() {
    let temp1 = img1.getAttribute("src");
    let temp2 = img2.getAttribute("src");
    
    img1.getAttribute("src") = img2.getAttribute("src");
    img2.getAttribute("src")= temp
    
};
// event listener
btn.addEventListener("click", changeImage);
