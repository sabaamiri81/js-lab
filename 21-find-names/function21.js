function speceficNames(array, letter) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element[0] === letter) {
            newArray += element + " "
        }

    }

    return newArray

}