
function showDublicate(arr1, arr2) {
  let newArr = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
           if(arr1[i] === arr2[j]){
            newArr.push(arr1[i])
           }
    }
  }
  return newArr
}

function deleteDublicate(arr1,arr2) {
  
}


function showAll(arr1, arr2) {
  newArray = arr1.concat(arr2).sort((a, b) => a - b)
  return Array.from(new Set(newArray))
}