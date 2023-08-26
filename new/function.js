


// const brands = ["ali","saba", "sahar", "samin","sana"]

// let res= brands.slice(1,3);

// console.log(res);



// success*****************
// function findMultiples(integer, limit) {
//     let newArray= [];
//     for(let i = 1; (integer*i)<= limit; i++){
//       newArray.push(integer*i)
//     }

//     return newArray
//     }

// success*****************
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


// success*****************

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


// success*****************

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




// function flip(arr) {
//   let sum = arr.join("")
//   let each = ""
//   for(let i = 0 ; i< sum.length; i++){
//       each += sum[i] + ","
//   }
//   let newArr = Math.min(each);
// let min = 0

// for (let i = 0; i < arr.length - 1; i++) {
//   let sum = arr[i];
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[j] > sum) {
//       sum = arr[j]
//     }

//     if (arr[j] < sum) {
//       min = arr[j]
//     }
//   }
//   if (dir === "R") {
//     newArr.unshift(sum)
//     newArr.splice(0,0,min)
//   }
//   if (dir === "L") {
//     newArr.push(sum)
//     newArr.splice(arr.length-1,0,min)
//   }


// }

//   return newArr
// };



// success*****************


// function maps(x){
//   let newArray = []
//   for(let i = 0 ; i < x.length ; i++){
//     newArray.push(x[i]*2)
//   }

//   return newArray

// }


// success*****************

// function grow(x){
//   let sum = 1;
//   for(let i = 0 ; i< x.length ; i++ ){
//     sum*= x[i]
//   }
// return sum
// }




// let man= 'A1,B2,C3,D4,E5' (14)
//  man= '1,2,3,4'
// console.log(man.length);

// function array(string) {
//   let sum = "";
//   if(string.length<=2){
//     return null
//   }else{

//     for(let i = 0 ; i <string.length-1 ; i++){
//       sum+= string[i+1]
//     }
//   }

//   return sum
// }


// success******************
// function fixTheMeerkat(arr) {
//   let newArr = [];
//    for(let i = arr.length-1 ; i >= 0 ; i--){
//      newArr.push(arr[i])
//    }
//    return newArr
//  }

// //  or 
//  function fixTheMeerkat(arr) {
//    return arr.reverse()
//  }



// success******************
// function sumMix(x){
//   let sum = 0
//   for(let i = 0 ; i<x.length ; i++){
//     sum+= Number(x[i])
//   }
// return sum
// }




// success******************
// function isOpposite(s1, s2) {
//   if (s1 === "") {
//     return false
//   }
//   let opposite = "";
//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] === s1[i].toUpperCase()) {
//       opposite += s1[i].toLowerCase()
//     } else {
//       opposite += s1[i].toUpperCase()
//     }
//   }
//   return (opposite === s2) ? true : false
// }




// success******************
// function sumOfDifferences(arr) {
//   let newArr = arr.sort(function (a, b) { return b - a });
//   let sum = 0;
//   for (let i = 0; i < newArr.length - 1; i++) {
//     sum += (newArr[i] - newArr[i + 1])
//   }
//   return sum
// }




// success******************
// function mergeArrays(arr1, arr2) {
//   let newArr = (new Set(arr1.concat(arr2).sort((a, b) => a - b)));
//   return [...newArr]
// }
// or
// function mergeArrays(arr1, arr2) {
//   return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));

// }


// function stringToArray(string){

// 	let slice = [...string];

//     return slice


// }



// function distinct(a) {
//     return Array.from(new Set(a.sort((a, b) => a - b)))
// }



// success******************
// function differenceInAges(ages) {
//     let newArr= ages.sort((a,b)=>a-b );
//     let end = [newArr[0], newArr[newArr.length-1] ,newArr[newArr.length-1]-newArr[0] ];
//     return end
// }

// or

// function differenceInAges(ages) {
//     let youngest = Math.min(...ages);
//     let oldest = Math.max(...ages);
//     return [youngest, oldest, oldest - youngest];
// }




// success******************
// function monkeyCount(n) {
//     let newArr = []
//     for (let i = 1; i <= n; i++) {
//         newArr.push(i)
//     }
//     return newArr
// }



// success******************
// function barista(coffees) {
//     if(coffees.length === 0){
//         return  0
//     }
//     let newArr = coffees.sort((a, b) => a - b);

//     let waiting = [newArr[0]];
//     let sum = [waiting[0]];
//     let total = 0;

//     for (let i = 1; i < newArr.length; i++) {
//         waiting.push(2 + newArr[i]);
//         sum.push(waiting[i] + sum[i - 1]);
//     };

//     for (let k = 0; k < sum.length; k++) {
//         total += sum[k];
//     };

//     return total
// }




