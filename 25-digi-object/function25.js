const CAMERA = {
    title: "دوربین دیجیتال کانن مدل EOS 4000D به همراه لنز 18-55 میلی متر DC III",
    price: "۱۴۷۹۹۰۰۰" ,
    imageUrl: "./image/112439699.webp",
    rate : "۴ ",
}

let img = document.querySelector("img");
let title = document.querySelector("h1");
let price = document.querySelector("h2");
let rate = document.querySelector("p");

img.setAttribute("src" , CAMERA.imageUrl);
title.textContent= CAMERA.title;
price.textContent = "قیمت : "  + CAMERA.price + " "+"تومان" ;
rate.textContent= "امتیاز : " + CAMERA.rate;