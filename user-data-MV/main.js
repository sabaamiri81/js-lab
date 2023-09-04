
// dom nodes
let container = document.querySelector(".main");



// request 
const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.ir/users");


// functions

function getData() {
    let data = JSON.parse(request.responseText);
    console.log(data);
    render(data);
}



function render(list) {
    let template = list.map((user) => {
        const { avatar, name, email, phone, website, company } = user;
        const { country, city, street, alley, number } = user.address;
        return `<div class="main__card">
        <img class="main__card__img" src=${avatar} alt="user avatar">
        <div class="main__card__data">
             <h1 class="name"> نام : ${name}</h1>
             <h2 class="phoneNumber"> تلفن  : ${phone}</h2>
             <h2 class="homeAddress">نشانی : ${country} , ${city} , ${street} , ${alley} , پلاک  ${number} </h2>
             <h3 class="emailAddress"> آدرس ایمیل :<a href="${email}" target="_blank">${email}</a></h3>
             <h3 class="company"> شرکت  : ${company}</h3>
             <h4 class="websiteAdress">آدرس سایت  : <a href="${website}" target="_blank">${website}</a> </h4>
         </div>
   </div>`
    })
    container.innerHTML = template.join("")
}




// add event listener
request.addEventListener("load", getData);
request.send();