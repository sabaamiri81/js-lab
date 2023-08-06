function random(a, b) {
    return Math.floor(Math.random() * (b - a) + a)
}


function randomBackground() {

    let img = document.querySelector("body");

    if (random(0, 18) === 0) {
        img.setAttribute("style", "background-image: url(./images/1600w-uFoN-4UuMEk.webp)")
    }


    if (random(0, 18) === 1) {
        img.setAttribute("style", "background-image: url(./images/187264.jpg)")
    }


    if (random(0, 18) === 2) {
        img.setAttribute("style", "background-image: url(./images/432916.jpg)")
    }

    if (random(0, 18) === 3) {
        img.setAttribute("style", "background-image: url(./images/4347440.jpg)")
    }

    if (random(0, 18) === 4) {
        img.setAttribute("style", "background-image: url(./images/443018.jpg)")
    }


    if (random(0, 18) === 5) {
        img.setAttribute("style", "background-image: url(./images/461127.jpg)")
    }


    if (random(0, 18) === 6) {
        img.setAttribute("style", "background-image: url(./images/84260.webp)")
    }

    if (random(0, 18) === 7) {
        img.setAttribute("style", "background-image: url(./images/Aesthetic-Laptop-Desktop-Wallpaper.jpg)")
    }


    if (random(0, 18) === 8) {
        img.setAttribute("style", "background-image: url(./images/Aesthetic-Wallpaper-For-Laptop-Wallpaper-High-Quality.jpg)")
    }


    if (random(0, 18) === 9) {
        img.setAttribute("style", "background-image: url(./images/after-dark-68-1920x1080.jpg)")
    }


    if (random(0, 18) === 10) {
        img.setAttribute("style", "background-image: url(./images/awesome-moon-wide-high-definition-wallpaper-.jpg")
    }


    if (random(0, 18) === 11) {
        img.setAttribute("style", "background-image: url(./images/cute-real-pokemons-1920x1080.jpg")
    }



    if (random(0, 18) === 12) {
        img.setAttribute("style", "background-image: url(./images/High_resolution_wallpaper_background_ID_77701652777.webp")
    }


    if (random(0, 18) === 13) {
        img.setAttribute("style", "background-image: url(./images/Laptop-Wallpaper-4K-Desktop.jpg")
    }


    if (random(0, 18) === 14) {
        img.setAttribute("style", "background-image: url(./images/pink-aesthetic-laptop-nawpic-8.jpg")
    }



    if (random(0, 18) === 15) {
        img.setAttribute("style", "background-image: url(./images/vpmKWE.jpg")
    }


    if (random(0, 18) === 16) {
        img.setAttribute("style", "background-image: url(./images/wp4021674.jpg")
    }



    if (random(0, 18) === 17) {
        img.setAttribute("style", "background-image: url(./images/wp4288364.jpg")
    }
}

document.write(randomBackground())