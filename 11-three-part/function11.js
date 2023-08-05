
function firstPart(number) {
    let sum = "";
    for (let i = 1; (number * i) <= 100; i++) {

        sum = sum + (number * i) + " ";
    }
    return sum
}

function sumDigit(input) {
    let input1 = String(input);
    let count = input1.length;
    let num = 0
    for (let w = 0; w < count; w++){
        num+= Number(input1[w]);
    }
    return num
}