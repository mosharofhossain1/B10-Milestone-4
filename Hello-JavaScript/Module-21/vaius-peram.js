function doubleTriple(number, double) {
    if (double === true) {
        const result = number * 3;
        return result
    }
    else {
        const result = number * 2;
        return result
    }

}

console.log(doubleTriple(5, true));
console.log(doubleTriple(8, false));

