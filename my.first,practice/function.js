// function findMultiples(integer, limit) {
//   let sum = "";
//   for (let i = 1; (integer * i) <= limit; i++) {

//     sum += "[" + integer * i + "]" + " ";
//   }

//   console.log(sum)
// };

// function stringy(size) {
//   let size1 = String(size);
//   let count = size1.length;
//   let sum = "";
//   for (let i = 0; i = count; i++) {
//     sum += 1 | 0;
//   }

//   return sum
// }

// function solution(a, b){
//   let a1= a.length;
//   let b1= b.length;
//   let sum= "";
//   if (b1>a1){
//     sum+= a + b + a
//   }else{
//     sum+= b+ a + b
//   }

//   return sum
// }

// function match(candidate, job) {
//   if (candidate <= job){
//     return true
//   }else{
//     return false
//   }
// }

function isOpposite(s1, s2) {
  let s = s1.length
  let t = s2.length
  let d = Number("s1[i]".charCodeAt())
  let e = Number("s2[i]".charCodeAt())

  if (s === 0 || t === 0) {
    return false
  }

  for (let i = 0; i < s; i++) {

    if (s == t && s1[i] != s2[i] && d + 32 == "s2[i]".charCodeAt() || e + 32 == "s1[i]".charCodeAt() || d - 32 == "s2[i]".charCodeAt() || e - 32 == "s1[i]".charCodeAt()) {
      return true
    } else {
      return false
    }
  }
}



