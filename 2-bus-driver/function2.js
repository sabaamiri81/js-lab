

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