let country = 'Bd';
let division = "Mymensigh";
let district = `B-Baria`;
let thana = new String('Phulpur');

// Array is mutable -> you can change the array
const numbers = [1, 3, 4, 5, 6, 7, 8];
console.log(numbers.length)
numbers[1] = 50;

// String -> string is immutable -> not changeable
const capital = 'Dhaka';
console.log(capital.length);
capital[0] = 'A'; // -> not changeable 

// string methods Lists :- 
const school = 'Raj uk School';
const subject = 'Chemistry';

const book = 'chemistry';

// toLowerCase() ->
if (subject.toLowerCase() === book.toLowerCase()) {
    console.log('valid book name')
}
else {
    console.log('not Valid book name')
}

const drink = 'water';
const liquid = '     water   ';

if (drink.trim() === liquid.trim()) {
    console.log('Water is valid ')
}
else {
    console.log('water not valid ')
}

// Slice() -> 
const address = 'Andor Killa';

const part = address.slice(2, 5)
// console.log(part)

const sentence = 'I am a good person and hardworking person';

console.log(sentence.split(' '))