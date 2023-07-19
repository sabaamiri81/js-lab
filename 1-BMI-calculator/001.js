


let height = prompt("Enter your height in meters");
let weight = prompt("Enter your eight in Kg");
let BMI = weight / (height * height);

if (BMI <= 18.5) {
    console.log("Underweight");
}

if (BMI > 18.5 && BMI <= 24.9) {
    console.log("Normal weight");
}

if (BMI > 25 && BMI <= 29.9) {
    console.log("Overweight");
}

if (BMI > 30) {
    console.log("Obesity");
}