function number() {
    let pass1 = "";
    for (i = 0; i < 8; i++) {
        pass1 += Math.floor(Math.random() * 10)
    }

    return pass1
}

function capital() {
    let pass2 = "";

    for (i = 0; i < 8; i++) {
        pass2 += (String.fromCharCode(Math.floor(Math.random() * 26 + 65)))
    }
    return pass2
}

function small() {
    let pass3 = "";

    for (i = 0; i < 8; i++) {
        pass3 += (String.fromCharCode(Math.floor(Math.random() * 26 + 97)))
    }
    return pass3
}


function total() {

    let password = "";
    for (i = 0; i < 3; i++) {

        password += Math.floor(Math.random() * 10) + (String.fromCharCode(Math.floor(Math.random() * 26 + 65))) + (String.fromCharCode(Math.floor(Math.random() * 26 + 97)))
    }

    return password

}