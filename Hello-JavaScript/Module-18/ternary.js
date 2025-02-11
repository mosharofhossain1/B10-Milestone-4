var age = 18;

if (age >= 18) {
    console.log('Vote deo tumi')
}
else {
    console.log('tumar age hoyce na ')

}


// TERNARY --------------

age >= 18 ? console.log('You can vote') : console.log('Tummi Choto');

let price = 500;
const isLeader = false;


if (isLeader === true) {
    price = 0
}
else {
    price = price + 100
}

// console.log(price);

// TERNARY -----------------

price = isLeader === true ? 0 : price + 200
console.log(price)

if (isLeader === true) {
    if (price > 1000) {
        price = price / 2
    }
    else {
        price = 0
    }
}
else {
    price = price + 1000;
}


// Semi Advance TERNARY ----------


// price > 1000 ? price / 2 : 0

price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000