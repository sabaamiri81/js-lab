let sum = 0;
function sumMul(m, n) {
    if (m > n)
        return "INVALID"
        for (let i = 1; (m * i) < n; i++) {

            sum += (m * i)
        }

    return sum

}

// another way

// let sum = 0;
// function sumMul(m, n) {

// if (n < m) {
//     return "INVALID"
// }

//     else{

//         for (let i = 0; i < n; i += m) {
//             sum += i
//         }
//     }

//     return sum
// }



