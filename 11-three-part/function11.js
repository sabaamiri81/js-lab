
function firstPart(number) {
    let sum = "";
    debugger;
    for (let i = 1; (number * i) <= 100; i++) {
        debugger;
        sum = sum + (number * i) + " ";

        let plus="";
        let num= (number*i).length;
        for(let w=0 ; w<=(num-1); w++){
          plus= plus + Number((number*i[w]))

        }

        return plus
    }

    
}

    // function secondPart(firstPart) {
    //     let num = 0;
    //     let plus = sum.length
    //     for (let w = 0; w <= plus; w++) {
    //         num = num + sum[w]
    //     }

    //     return num
    // }