let sum = 0;
function saba(m, n) {
    if (n > 0) {

        for (let i = 1; (m * i) < n; i++) {

            sum += (m * i)
        }

    }

    return sum

}


