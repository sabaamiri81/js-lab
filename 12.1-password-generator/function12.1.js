// we can always use this function to generate
//  a random number between two specefic number

function random(a, b) {
    return Math.floor(Math.random() * (b - a) + a)
}


// this function creates a password 
// but it is not proper enough

function passGenerator() {
    let pass = "";
    for (let i = 0; i < 8; i++) {

        if (Math.random() * 63 < 10) {
            let num = random(0, 10);
            pass += num
        } else

            if (Math.random < 0.5) {
                let small = String.fromCharCode(random(65, 91));
                pass += small;
            } else {
                let capital = String.fromCharCode(random(97, 123));
                pass += capital;
            }
    }

    return pass
}

// now i want to gurantee that function  includes
//  at least a NUMBER, a SMALL LETTER and a CAPITAL LETTER

function passGenerator2() {
    let pass = "";

    for (let i = 0; i < 3; i++) {

        if (Math.random() < 0.3) {
            let num = random(0, 10);
            pass += num
        } else

            if (Math.random() >= 0.3 && Math.random() < 0.6) {
                let small = String.fromCharCode(random(65, 91));
                pass += small;
            } else {
                let capital = String.fromCharCode(random(97, 123));
                pass += capital;
            }
    }

    pass += random(0, 10);

    for (let i = 0; i < 4; i++) {

        if (Math.random() * 63 < 10) {
            let num = random(0, 10);
            pass += num
        } else

            if (Math.random < 0.5) {
                let small = String.fromCharCode(random(65, 91));
                pass += small;
            } else {
                let capital = String.fromCharCode(random(97, 123));
                pass += capital;
            }
    }

    return pass
}




