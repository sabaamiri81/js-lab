

let cap = prompt('Enter the capacity');
let on = prompt('Enter the number of passengers');
let wait = prompt('Enter the number of people waiting');
let d = cap - on - wait;

if (d < 0) {
    console.log("Bus is full and" + " " + -d + " " + "people waiting");
}

if (d == 0) {
    console.log('Bus is full and no waiting');
}

if (d > 0) {
    console.log(d + " " + "empty seats");
}
