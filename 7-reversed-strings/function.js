
function reversedString(input) {
    let output = "";
    let count = input.length;
    for (let i = count - 1; i >= 0; i--) {
        output = output + input[i]
    }

    return output
}