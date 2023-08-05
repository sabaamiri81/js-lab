function findMultiples(integer, limit) {
  let sum = "";
  for (let i = 1; (integer * i) <= limit; i++) {

    sum += "[" + integer * i + "]" + " ";
  }

  console.log(sum)
};