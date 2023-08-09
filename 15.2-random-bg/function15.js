
// راه خیلی بهینه تر نسبت به فایل 15.1


function randomBackground() {

    let img = document.querySelector("body");
    let randomNumber = Math.floor(Math.random() * 15 + 1)
    img.setAttribute("style", "background-image: url(./images/" + randomNumber + ".jpg)")
}


randomBackground()


// or

// function randomBackground() {
//     let randomNumber = Math.floor(Math.random() * 15 + 1);
//     document.body.style.backgroundImage = `url(./images/${randomNumber}.jpg)`;
// }


// randomBackground()
