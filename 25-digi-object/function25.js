const CAMERA = {
    title: "دوربین دیجیتال کانن مدل EOS 4000D به همراه لنز 18-55 میلی متر DC III",
    price: "۱۴۷۹۹۰۰۰۰" ,
    imageUrl: "./image/112439699.webp",
    rate : "۴ ",
}

let img = document.querySelector("img");
let title = document.querySelector("h1");
let price = document.querySelector("h2");
let rate = document.querySelector("p");

function exchange(){
    let price = CAMERA.price/ 10;
    return price.toLocaleString();
}

img.setAttribute("src" , CAMERA.imageUrl);
title.textContent= CAMERA.title;
price.textContent = "قیمت : "  + exchange() + " "+"تومان" ;
rate.textContent= "امتیاز : " + CAMERA.rate;


sum = ""
function exchange(input) {
    for(let i = input.length-1 ; i>= 0 ; i-3){
       sum+= input[i] + input[i+1] + input[i+2] +","
    }
    return sum
}