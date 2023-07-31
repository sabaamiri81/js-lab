function zero(a) {
    let sum = 0
    for (let i = 0; ; i++) {
        // let num = Number(prompt("enter a number"));
        sum = sum + a;
        if (a === 0) {
            break;
        }
    }

    return sum
}



//this is another way withWhile

// let harchi = 0;
// while (true) {
//     let input = Number(prompt("enter a number"));
//     harchi += input;
//     if (input == 0)
//         break;
// }

// console.log(harchi)

