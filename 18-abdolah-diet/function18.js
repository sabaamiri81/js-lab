let table = ["G", "Y", "G", "R", "R"]

function diet(array) {
    let green = []
    let yellow = []
    let red = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (array[i] === "G") {
            green.push(array[i])
        }
        if (array[i] === "R") {
            red.push(array[i])
        }
        if (array[i] === "Y") {
            yellow.push(array[i])
        }

    }

    if (red.length >= 3 || red.length === 5 || yellow.length === 5 || green.length === 0 || green.length === 1) {
        return "nakhor"
    } else {
        return "nosh"
    }


}