

let length = prompt("Enter the length");
let width = prompt("Enter the width");
let environment = 2 * length + 2 * width;
// let environment = 2*(length+width);
let area = length * width;

if (length == width) {
    console.log(area);
}

if (length > width || length < width) {
    console.log(environment);
}

