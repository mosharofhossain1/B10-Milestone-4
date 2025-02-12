// Diffrent way loop use 

// even
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }


// odd
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }


// 1 to 30 number divisible by 5

// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         console.log(i)
//     }
// }


// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i)
//     }
// }


// give me the sum of numbers from 1 to 40 that are divisible by 3
let sum = 0;
for (let i = 1; i <= 40; i++) {
    if (i % 3 === 0) {
        console.log(i)
        sum = sum + i
    }
}

console.log('Totala of Numer is :-', sum)