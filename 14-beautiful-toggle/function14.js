let flag = true
function makeMeHappy() {
    let btn = document.querySelector("button")
    let smile= document.getElementById("big-smile")
    let right= document.getElementById("smile__eye--right")
    let left= document.getElementById("smile__eye--left")
    let mouth= document.getElementById("smile__mouth")
    



    if (flag === true) {
        btn.style.color = "black"
        btn.style.backgroundColor = "red"
        btn.textContent = "BE SAD"

        smile.style.backgroundColor= "greenyellow"
        // smile.style.position= "absolute"
        // smile.style.right= "15%"

        right.style.backgroundColor="green"
        left.style.backgroundColor="green"

        mouth.style.backgroundColor="green"
        mouth.style.borderBottomLeftRadius="90px"
        mouth.style.borderBottomRightRadius="90px"
        mouth.style.borderTopLeftRadius="0px"
        mouth.style.borderTopRightRadius="0px"

        flag = false
    } else {
        btn.style.color = "green"
        btn.style.backgroundColor = "greenyellow"
        btn.textContent = "BE HAPPY"

        smile.style.backgroundColor= "red"
        // smile.style.position= "absolute"
        // smile.style.left= "15%"

        right.style.backgroundColor="black"
        left.style.backgroundColor="black"
        
        mouth.style.backgroundColor="black"
        mouth.style.borderTopLeftRadius="90px"
        mouth.style.borderTopRightRadius="90px"
        mouth.style.borderBottomLeftRadius="0px"
        mouth.style.borderBottomRightRadius="0px"

        flag = true
    }

}