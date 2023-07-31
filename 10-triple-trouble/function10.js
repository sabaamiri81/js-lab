function tripleTrouble(a, b, c) {
    let word = a.length;
    let sum = "";
    for (let i = 0; i <= word - 1; i++) {
        sum += a[i] + b[i] + c[i]
    }

    return sum
}