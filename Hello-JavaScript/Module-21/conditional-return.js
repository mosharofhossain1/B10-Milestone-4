// conditional return check even number

function condiReturn(num) {
    if (num % 2 === 0) {
        return true
    }
    else {
        return false;
    }
}

const value = 76;
const result = condiReturn(value);
console.log(result)


// conditional return check odd numer 

function odd(num) {
    if (num % 2 === 1) {
        return true
    }
    else {
        return false
    }
}

console.log(odd(56));

