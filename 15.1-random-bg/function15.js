function random(a, b) {
    return Math.floor(Math.random() * (b - a) + a)
}


// راه بهینه تر نسبت به فایل 15


function randomBackground() {

    let img = document.querySelector("body");
    let randomNumner= random(0, 18) 

    if (randomNumner === 0) {
        img.setAttribute("style", "background-image: url(./images/1600w-uFoN-4UuMEk.webp)")
    }


    if (randomNumner === 1) {
        img.setAttribute("style", "background-image: url(./images/187264.jpg)")
    }


    if (randomNumner === 2) {
        img.setAttribute("style", "background-image: url(./images/432916.jpg)")
    }

    if (randomNumner === 3) {
        img.setAttribute("style", "background-image: url(./images/4347440.jpg)")
    }

    if (randomNumner=== 4) {
        img.setAttribute("style", "background-image: url(./images/443018.jpg)")
    }


    if (randomNumner === 5) {
        img.setAttribute("style", "background-image: url(./images/461127.jpg)")
    }


    if (randomNumner=== 6) {
        img.setAttribute("style", "background-image: url(./images/84260.webp)")
    }

    if (randomNumner === 7) {
        img.setAttribute("style", "background-image: url(./images/Aesthetic-Laptop-Desktop-Wallpaper.jpg)")
    }


    if (randomNumner=== 8) {
        img.setAttribute("style", "background-image: url(./images/Aesthetic-Wallpaper-For-Laptop-Wallpaper-High-Quality.jpg)")
    }


    if (randomNumner === 9) {
        img.setAttribute("style", "background-image: url(./images/after-dark-68-1920x1080.jpg)")
    }


    if (randomNumner === 10) {
        img.setAttribute("style", "background-image: url(./images/awesome-moon-wide-high-definition-wallpaper-.jpg")
    }


    if (randomNumner === 11) {
        img.setAttribute("style", "background-image: url(./images/cute-real-pokemons-1920x1080.jpg")
    }



    if (randomNumner=== 12) {
        img.setAttribute("style", "background-image: url(./images/High_resolution_wallpaper_background_ID_77701652777.webp")
    }


    if (randomNumner === 13) {
        img.setAttribute("style", "background-image: url(./images/Laptop-Wallpaper-4K-Desktop.jpg")
    }


    if (randomNumner=== 14) {
        img.setAttribute("style", "background-image: url(./images/pink-aesthetic-laptop-nawpic-8.jpg")
    }



    if (randomNumner=== 15) {
        img.setAttribute("style", "background-image: url(./images/vpmKWE.jpg")
    }


    if (randomNumner === 16) {
        img.setAttribute("style", "background-image: url(./images/wp4021674.jpg")
    }



    if (randomNumner === 17) {
        img.setAttribute("style", "background-image: url(./images/wp4288364.jpg")
    }
}

randomBackground()