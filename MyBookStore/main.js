alert("سلام دوست عزیز \n به کتابخانه کوچک من خوش آمدی")


const BOOKS = [
    {
        id: 1,
        title: "خواجه تاجدار",
        author: "ژان گور",
        published_date: 2007,
        language: "persian",
        genre: "تاریخ",
        imgSrc: "1.jpg"
    },
    {
        id: 2,
        title: "ضیافت",
        author: "افلاطون",
        published_date: 385,
        language: "greek",
        genre: "فلسفه",
        imgSrc: "2.jpg"
    },
    {
        id: 3,
        title: "منطق الطیر",
        author: "عطار",
        published_date: 1177,
        language: "persian",
        genre: "شعر",
        imgSrc: "3.jpg"
    },
    {
        id: 4,
        title: "مثنوی معنوی",
        author: "مولوی",
        published_date: 1258,
        language: "persian",
        genre: "شعر",
        imgSrc: "4.jpg"
    },
    {
        id: 5,
        title: "دیوان حافظ",
        author: "حافظ",
        published_date: 1200,
        language: "persian",
        genre: "شعر",
        imgSrc: "5.jpg"
    },
    {
        id: 6,
        title: "رومیو و جولیت",
        author: "ویلیام شکسپیر",
        published_date: 1595,
        language: "english",
        genre: "عاشقانه",
        imgSrc: "6.jpg"
    },
    {
        id: 8,
        title: "ویس و رامین",
        author: "فخرالدین اسعد گرگانی",
        published_date: 1054,
        language: "persian",
        genre: "عاشقانه",
        imgSrc: "7.jpg"
    },
    {
        id: 9,
        title: "گلستان",
        author: "سعدی",
        published_date: 1258,
        language: "persian",
        genre: "شعر",
        imgSrc: "8.jpg"
    },
    {
        id: 9,
        title: "بوستان",
        author: "سعدی",
        published_date: 1257,
        language: "persian",
        genre: "شعر",
        imgSrc: "9.jpg"
    },
    {
        id: 10,
        title: "گلشن راز",
        author: "شیخ محمود شبستری",
        published_date: 1311,
        language: "persian",
        genre: "شعر",
        imgSrc: "10.jpg"
    },
    {
        id: 11,
        title: "لیلی و مجنون",
        author: "نظامی",
        published_date: 1188,
        language: "persian",
        genre: "عاشقانه",
        imgSrc: "11.jpg"
    },
    {
        id: 12,
        title: "شاهنامه",
        author: "فردوسی",
        published_date: 1010,
        language: "persian",
        genre: "شعر",
        imgSrc: "12.jpg"
    },
    {
        id: 13,
        title: "ایلیاد",
        author: "هومر",
        published_date: 762,
        language: "greek",
        genre: "شعر",
        imgSrc: "13.jpg"
    },
    {
        id: 14,
        title: "اودیسه",
        author: "هومر",
        published_date: 725,
        language: "greek",
        genre: "شعر",
        imgSrc: "14.jpg"
    },
    {
        id: 15,
        title: "هملت",
        author: "ویلیام شکسپیر",
        published_date: 1609,
        language: "greek",
        genre: "درام",
        imgSrc: "15.jpg"
    },
    {
        id: 16,
        title: "دن کیشوت",
        author: "میگل دسروانتس",
        published_date: 1605,
        language: "spanish",
        genre: "درام",
        imgSrc: "16.jpg"
    }
]

const FAVORITE =[]


// dom nodes
let library = document.querySelector(".library")
let fav = document.querySelector(".header__heartIcon")






// functions

function favData(bookId) {
    let findData = BOOKS.find(item => item.id === bookId)
    FAVORITE.push(findData);
}


    function favRender() {

        let favTemplate = FAVORITE.map((favoriteBook, index) => {
           return ` <div class="favBook">
           <div class="favBook__data">
           <h2 class="favBook__data--title">نام اثر : ${favoriteBook.title}</h2>
           <h3 class="favBook__data--author">خالق اثر : ${favoriteBook.author}</h3>
           <h4 class="favBook__data--date">زمان انتشار : سال ${favoriteBook.published_date}</h4>
           <h5 class="favBook__data--lang">زبان : ${favoriteBook.language} </h5>
           <h5 class="favBook__data--genre">ژانر : ${favoriteBook.genre}</h5>
       </div>
           <img class="favBook__img" src="./image/${favoriteBook.imgSrc}" alt="book picture">
          
          </div>`
        })
        library.innerHTML = favTemplate
    }




function addProduct(event) {
    let template = BOOKS.map((book, index) => {
        return `<div class="library__product">
        <img class="library__product--img" src="./image/${book.imgSrc}" alt="book picture">
<div class="library__product--shadow">
  <h1 class="library__product--shadow--title">نام اثر : ${book.title}</h1>
  <h2 class="library__product--shadow--author">خالق اثر : ${book.author}</h2>
  <h3 class="library__product--shadow--date">زمان انتشار : سال ${book.published_date}</h3>
  <h4 class="library__product--shadow--lang">زبان : ${book.language} </h4>
  <h4 class="library__product--shadow--genre">ژانر : ${book.genre}</h4>
</div>
<button class="library__btn"  onclick="favData(${book.id})">افزودن به علاقه مندی ها</button>
      </div>`
    })
    library.innerHTML = template
}




// event listener
window.addEventListener("load", addProduct);
fav.addEventListener("click", favRender)