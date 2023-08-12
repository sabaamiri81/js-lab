


// const brands = ["ali","saba", "sahar", "samin","sana"]

// let res= brands.slice(1,3);

// console.log(res);




// function findMultiples(integer, limit) {
//     let newArray= [];
//     for(let i = 1; (integer*i)<= limit; i++){
//       newArray.push(integer*i)
//     }

//     return newArray
//     }



// function addLength(str) {
//     let myArray = str.split(" ");
//     let newArray = [];

//     for (let i = 0; i < myArray.length; i++) {
//         let word= myArray[i]
//         newArray.push( word+" "+word.length)
//     }
//     return newArray
// };



// function gravity(dir , arr) {

//     let newArray = [0];


//     for (let i = 1; i < arr.length; i++) {

//         if (arr[i] > newArray[i--]) {
//             arr.splice(i, 0 , arr[i++])
//         }

//         if (dir === "R") {
//             newArray.push()
//         }
//         if (dir === "R") {
//             newArray.unshift()
//         }


//     }

//     return newArray

// }



// function distinct(arr) {
//     let newArr= [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j =i+1; j < arr.length; j++) {
//             if (arr[i] === arr[j]){
//                 newArr.unshift(arr[j])
//             }else{
//                 newArr.unshift( arr[i],arr[j] );
//             }

//         }

//     }

// }




// function warnTheSheep(queue) {
//     let lastPosition = queue[queue.length - 1];
//     if (lastPosition === "wolf") {
//         return "Pls go away and stop eating my sheep"
//     }
//     for (let i = queue.length - 1; i >= 0; i--) {
//         let wolfPosition = queue[i];
//         if (wolfPosition === "wolf") {
//             return "Oi! Sheep number" + " " + ((queue.length - 1) - i) + "! You are about to be eaten by a wolf!"
//         }
//     }
// }





// function addLength(str) {
//     let myArray = str.split(" ");
//     let newArray = [];

//     for (let i = 0; i < myArray.length; i++) {
//         let word= myArray[i]
//         newArray.push( word+" "+word.length)
//     }
//     return newArray
// };

// function arrayPlusArray(arr1, arr2) {
//   let arrays = arr1.concat(arr2);
//    let sum = 0;
//    for(let i = 0 ; i< arrays.length; i++ ){
//      sum+= arrays[i]
//    }
//    return sum
//  }


// function invert(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Math.abs(array[i]) === array[i]) {
//       newArray.push(-array[i])
//     } else {
//       newArray.push(Math.abs(array[i]))
//     }
//   }
//   return newArray
// }

// or this

// function invert(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(-array[i])
//   }
//   return newArray
// }




function mergeArrays(arr1, arr2) {
  return  arr1.concat(arr2)
}