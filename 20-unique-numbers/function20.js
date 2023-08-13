
let numbers = [1, 1, 4, 3, 5, 4, 6, 9, 9]

// function uniqueNumbers(array) {
//     let uniques = []
//     for (let i = 0; i < array.length; i++) {
//         let sum = 0
//         for (let j = 0; j < array.length; j++) {
//             if (array[i] == array[j] && i !== j) {
//                 sum++
//             }
//         }
//         if (sum == 0) {
//             uniques.push(array[i])

//         }
//     }
//     return uniques
// }



// new way with indexOf and lastIndexOf

function uniqueNumbers(numbers) {
    let uniques=[];
    for (const number of numbers) {
        if(numbers.indexOf(number)===numbers.lastIndexOf(number)){
            uniques.push(number)
        }
    }
    return uniques
    
};
