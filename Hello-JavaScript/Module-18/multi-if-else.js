const price = 5000;

// if (price >= 5000) {
//     // 10% Discount
//     const discount = price * 10 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount)
// }
// else if (price > 2500) {
//     // 5% Discount 
//     const discount = price * 5 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount)
// }

// else {
//     console.log(price)
// }

var age = 15;

if (age > 12) {
    console.log('you can eat for free')
}

else if (age >= 50) {
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}

else if (age >= 25) {
    const discount = price * 25 / 100;
    const payAmount = price - discount
    console.log(payAmount)
}

else {
    console.log(price)
}