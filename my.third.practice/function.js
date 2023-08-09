
let sheeps = [true, true, false, true, false, false];


function presents() {
    let sum = 0;
    for (let i = 0; i < sheeps.length; i++) {
        const element = sheeps[i];
        if (element) {
            sum++
        }
    }
    return "there are " + sum + " sheeps"
}

document.write(presents());