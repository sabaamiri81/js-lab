
function BMI(weight, height) {
    return weight / (height * height);
}

function status(result) {
    if (result <= 18.5) {
        return "Underweight";
    }

    if (result > 18.5 && result<= 24.9) {
        return "Normal weight";
    }

    if (result > 25 && result<= 29.9) {
        return "Overweight";
    }

    if (result > 30) {
        return "Obesity";
    }
}