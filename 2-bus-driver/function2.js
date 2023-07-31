

function busCapacity(cap, on, wait) {
    let d = cap - on - wait;

    if (d < 0) {
        return ("Bus is full and" + " " + -d + " " + "people waiting");
    }

    if (d == 0) {
        return ('Bus is full and no waiting');
    }

    if (d > 0) {
        return (d + " " + "empty seats");
    }
}


// OR

// function howManySeat(cap, on, wait) {
//     if (cap - (on + wait) > 0)
//         return "there are free seats"

//     else
//         return wait - (cap - on) + "are waiting"
// }