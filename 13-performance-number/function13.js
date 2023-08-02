function performanceScore(score) {
    if (score >= 90) {
        document.write("Nice Done")
        document.body.style.background = "green";
        document.body.style.fontSize = "50px";
        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";
        document.body.style.height = "700px";
    }
    if (score >= 60 && score < 90) {
        document.write("Not Bad")
        document.body.style.background = "orange";
        document.body.style.fontSize = "50px";
        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";
        document.body.style.height = "700px";
    }
    if(score <60) {
        document.write("Failed")
        document.body.style.background = "red";
        document.body.style.fontSize = "50px";
        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";
        document.body.style.height = "700px";
    }
}

// چرا else میذاشتم نمیشد