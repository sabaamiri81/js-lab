const shopBasket = []
const PRODUCT = []

const mainSection = document.querySelector(".mainSection");
const singleSection = document.querySelector(".singleSection");
const nav = document.querySelector(".nav");
const basketPointer = document.getElementById("basketPointer");
const basketCounter = document.querySelector(".header__shoppingIcon--number");






// home button

function backHome() {
    let tem = PRODUCT.map((newHome, index) => {
        const { image, title, description, price, id, category } = newHome;
        return `
        <a href="#" onclick="showProduct(\`${id}\`)">
        <div class="mainSection__card">
            <img class="mainSection__card--img" src="${image}" alt="product image">
            <h1 class="mainSection__card--title">${title}</h1>
            <button class="mainSection__card--btn" onclick="shoppingBasket(${id})">buy now</button>
            <p class="mainSection__card--price">price : ${price} $</p>
        </div>
    </a>`
    })

    mainSection.innerHTML = tem.join("");
}



// main

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((data) => {
        return showData(data)
    })
    .catch()

function showData(products) {
    let temp1 = products.map((product, index) => {
        const { image, title, description, price, id, category } = product;
        return `
        <a href="#" onclick="showProduct(\`${id}\`)">
        <div class="mainSection__card">
            <img class="mainSection__card--img" src="${image}" alt="product image">
            <h1 class="mainSection__card--title">${title}</h1>
            <button class="mainSection__card--btn" onclick="shoppingBasket(${id})">buy now</button>
            <p class="mainSection__card--price">price : ${price} $</p>
        </div>
    </a>`
    })

    mainSection.innerHTML = temp1.join("");
    showProducts(products)
}


// single product

function showProduct(singleId){

    fetch(`https://fakestoreapi.com/products/${singleId}`)
    .then(res => res.json())
    .then((single) => {
        return showSingle(single)
    })
    .catch()

}

function showSingle(harchi) {
    
    let tem = ` 
        <div class="singleSection__card">
            <h1 class="singleSection__card--title">${harchi.title}</h1>
            <h2 class="singleSection__card--description"> ${harchi.description}</h2}>
            <button class="singleSection__card--btn" onclick="shoppingBasket(${harchi.id})">buy now</button>
            <p class="singleSection__card--price">price : ${harchi.price} $</p>
            <img class="singleSection__card--img" src="${harchi.image}" alt="product image">
        </div>`
    
    mainSection.innerHTML = tem;
}


// shopping basket

function showProducts(producttt) {
    producttt.map((p) => {
        return PRODUCT.push(p)
    })
    console.log(PRODUCT)

}

function shoppingBasket(ID , event) {
    let findProduct = PRODUCT.find(item => item.id === ID)
    shopBasket.push(findProduct);
    basketCounter.innerHTML = "  " + shopBasket.length
    event.stopPropagation();
    console.log(shopBasket);
}

function showShop() {
    let tem = shopBasket.map((newHome, index) => {
        const { image, title, description, price, id, category } = newHome;
        return `
        <a href="#" onclick="showProduct(\`${id}\`)">
        <div class="mainSection__card">
            <img class="mainSection__card--img" src="${image}" alt="product image">
            <h1 class="mainSection__card--title">${title}</h1>
            <button class="mainSection__card--btn" onclick="shoppingBasket(${id}, event)">Remove from here</button>
            <p class="mainSection__card--price">price : ${price} $</p>
        </div>
    </a>`
    })
    mainSection.innerHTML = tem.join("");
}


// nav category

function addNewNav() {
    nav.classList.toggle("navi")
}

function findCategory(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then((data) => {
            return showData(data)
        })
        .catch()
}


// each category

fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then((cate) => {
        return navCategory(cate)
    })
    .catch()

function navCategory(categories) {
    let temp2 = categories.map((item, index) => {
        return `   
            <h1 class="navItem" onclick="findCategory(\`${item}\`)">${item}</h1> `
    })
    nav.innerHTML = temp2.join("")
}


basketPointer.addEventListener("click", showShop)