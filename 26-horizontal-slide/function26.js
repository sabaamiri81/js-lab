const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")


const IMAGES = ["azadi", "kiasar", "maranjab", "eram", "dolatabad"];
const TITLES = ['برج آزادی', 'طبیعت کیاسر', 'کویر مرنجاب', 'باغ ارم', 'باغ دولت آباد'];
const SUBTITLES = ['تهران', 'مازندران', 'اصفهان', 'شیراز', 'یزد'];


// array of objects
// const SLIDES = [
//     {
//         imageUrl: 'azadi.jpg',
//         title: 'برج آزادی',
//         subtitle: 'تهران'
//     },
//     {
//         imageUrl: 'kiasar.jpg',
//         title: 'طبیعت کیاسر',
//         subtitle: 'مازندران'
//     },


// ]

let index = 0;


// functions
function changeBackground(index) {
    document.body.style.backgroundImage = `url(./images/${IMAGES[index]}.jpg)`;
    title.textContent = TITLES[index];
    subtitle.textContent = SUBTITLES[index];

}

function nextSlide() {
    index++;
    if (index > IMAGES.length - 1)
        index = 0

    changeBackground(index)
}

function prevSlide() {
    index--;
    if (index < 0)
        index = IMAGES.length - 1
    changeBackground(index)
}

// events
prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)
changeBackground(index);