// function er maddome array er element sum korar systems 

function sumOfNumber(numbers) {
    let sum = 0;
    for (let number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum
}

const array = [2, 3, 4, 5];

const result = sumOfNumber(array);
console.log('The Sum of Number is :- ', result);

// return all even number of an array 

function evenCheck(numbers) {
    let evens = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number)
        }
    }
    return evens;
}

const valus = [3, 4, 6, 7, 8, 9, 12, 17];

const outPut = evenCheck(valus);
console.log('Evens Number is :- ', outPut)

// return all event number sum 