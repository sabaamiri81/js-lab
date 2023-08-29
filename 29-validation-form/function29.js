let nam = document.querySelector(".name");
let lastName = document.querySelector(".lastName");
let nationalCode = document.querySelector(".nationalCode");
let phoneNumber = document.querySelector(".phoneNumber");

let counter = 0 
console.log(counter);


nam.addEventListener("keyup", () => {
    if (nam.value.match(/^[a-z]{2,}$/)) {
        nam.style.border = "5px solid green";
        counter++;
        console.log(counter)
    }
    else {
        nam.style.border = "5px solid red"
    }
});

lastName.addEventListener("keyup", () => {
    if (lastName.value.match(/^[a-z]{2,}$/)) {
        lastName.style.border = "5px solid green"
        ++counter
    }
    else {
        lastName.style.border = "5px solid red"
    }
});

nationalCode.addEventListener("keyup", () => {
    if (nationalCode.value.match(/^[0-9]{10}$/)) {
        nationalCode.style.border = "5px solid green"
        ++counter
    }
    else {
        nationalCode.style.border = "5px solid red"
    }
});

phoneNumber.addEventListener("keyup", () => {
    if (phoneNumber.value.match(/^989[0-9]{9}$/)) {
        phoneNumber.style.border = "5px solid green"
        ++counter
    }
    else {
        phoneNumber.style.border = "5px solid red"
    }
})