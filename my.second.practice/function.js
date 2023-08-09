

function prise() {
    let prises =[ "watch","bag","dog", "phone"];
    document.write(prises[Math.floor(Math.random()*4)]);
}

prise()

// or better

// function prise() {
//     let prises =[ "watch","bag","dog", "phone"];
//     let random= Math.floor(Math.random()*prises.length);

//     document.write(prises[random])
// }

// prise()