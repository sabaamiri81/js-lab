function MiddelNumber(a, b, c) {

    if (a > b && a < c || a > c && a < b) {
        return a
    };

    if (b > a && b < c || b < a && b > c) {
        return b
    };

    if (c > b && c < a || c < b && c > a) {
        return c
    };

}
