const circle = document.getElementById("circle");
let body = document.querySelector("body");
let btn = document.querySelector("button")


let flag = true
function toggle() {
    if(flag=== true){
        body.style.backgroundColor =  "rgb(133, 211, 239)";

        btn.textContent = "last night";

        circle.style.backgroundImage= "linear-gradient(yellow, orange,rgb(246, 217, 138), rgb(255, 172, 47))" ;
        circle.style.boxShadow= "20px 20px 70px rgb(228, 211, 25)";

        flag = false
    }else{
        body.style.backgroundColor = "rgb(15, 35, 102)";
        
        btn.textContent = "next day";

        circle.style.backgroundImage= "linear-gradient(white,rgb(183, 178, 178),rgb(214, 207, 207),rgb(234, 229, 213),rgb(202, 185, 185),rgb(201, 189, 189))" ;
        circle.style.boxShadow= "20px 20px 70px rgb(255, 255, 255)";

        flag = true;
    }

    
}

function trackCircle(event) {
    console.log(event)
    let x = event.clientX /2
    let y = event.clientY /2


    // template string
    circle.style.transform = `translate(${x}px,${y}px)`;
}




window.addEventListener("mousemove", trackCircle);
btn.addEventListener("click", toggle);