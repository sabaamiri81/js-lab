
let height = Number(prompt("Enter your height in meters"));
let weight = Number(prompt("Enter your eight in Kg"));

let answer = BMI(weight, height);
let result = status(answer);
alert("you are :" + result);