/* ES6 (ECMAScript 2015) এবং পরবর্তী আপডেটগুলোতে জাভাস্ক্রিপ্ট আরও শক্তিশালী এবং সুবিধাজনক হয়েছে। এই আপডেটগুলোর মধ্যে ডেস্ট্রাকচারিং (Destructuring), স্প্রেড ও রেস্ট অপারেটর (...), এবং টেমপ্লেট লিটারাল ( ) অন্যতম গুরুত্বপূর্ণ ফিচার। */

/* ১️⃣ Destructuring (ডেস্ট্রাকচারিং)
ডেস্ট্রাকচারিং হলো অ্যারে বা অবজেক্ট থেকে সহজেই মান (value) বের করার একটি সুবিধাজনক পদ্ধতি। এটি কোডকে ছোট, পরিষ্কার এবং সহজবোধ্য করে। */

// 🔹 অ্যারে ডেস্ট্রাকচারিং (Array Destructuring)
// অ্যারের নির্দিষ্ট মানগুলোকে আলাদা আলাদা ভেরিয়েবলে রাখার জন্য ডেস্ট্রাকচারিং ব্যবহার করা হয়।


// উদাহরণ ১: সাধারণভাবে অ্যারে থেকে মান বের করা

let numbers = [10, 20, 30, 40];
let [a, b, c] = numbers;
// console.log(a)
// console.log(b)
// console.log(c)

// উদাহরণ ২: কিছু উপাদান বাদ দিয়ে নেওয়া

let [x, , z] = numbers;
// console.log(x)
// console.log(z)

// উদাহরণ ৩: অবশিষ্ট উপাদান নেওয়া (rest operator)
let anotherNumbers = [1, 2, 3, 4, 5, 6, 7];
const [first, second, ...rest] = anotherNumbers;
console.log(first);
console.log(second)
console.log(rest);

/* 🔹 অবজেক্ট ডেস্ট্রাকচারিং (Object Destructuring)
অবজেক্ট থেকে প্রপার্টি ভ্যালুগুলো সহজেই বের করতে ডেস্ট্রাকচারিং ব্যবহার করা হয়। */

// উদাহরণ ১: সাধারণ অবজেক্ট ডেস্ট্রাকচারিং

let person = {
    name: 'Akikul Islam',
    age: 40,
    home: 'Bowla'
}
let { name, age, home } = person;
console.log(name);
console.log(age)
console.log(home)

// উদাহরণ ২: প্রপার্টির নাম পরিবর্তন করা
let { name: fullName } = person;
console.log(fullName)


// উদাহরণ ৩: ডিফল্ট মান দেওয়া
let person2 = {
    names: 'Sadia',
    homes: 'Begunbari'
}

let { names, ages = 34, homes } = person2;
console.log(names)
console.log(ages);
console.log(homes);


/* ২️⃣ Spread & Rest Operators (...)
... অপারেটরকে স্প্রেড অপারেটর (Spread Operator) এবং রেস্ট অপারেটর (Rest Operator) বলা হয়। এটি বিভিন্ন পরিস্থিতিতে ব্যবহার করা যায়। */

// 🔹 Spread Operator (স্প্রেড অপারেটর)

// ১. অ্যারে কপি করা
let newNumbers = [...numbers];
console.log(newNumbers)

// ২. অ্যারে একত্রিত করা (Concatenation)
let firstArray = [1, 2, 3, 4, 5];
let secondArray = [6, 7, 8];
const combainArray = [...firstArray, ...secondArray];
console.log(combainArray);


// ৩. অবজেক্ট কপি করা  and নতুন প্রপার্টি যোগ করা
let person3 = { name: "Rahim", age: 25 };
let newPerson = { ...person3, city: 'Bangladesh' };

console.log(newPerson); // { name: 'Rahim', age: 25 }

/* 🔹 Rest Operator (রেস্ট অপারেটর)
রেস্ট অপারেটর ব্যবহার করে অতিরিক্ত মানগুলো একটি অ্যারেতে সংগ্রহ করা যায়। */


// ১. ফাংশনে ব্যবহার
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(sum(1, 2, 3, 4));


// ২. অ্যারে থেকে নির্দিষ্ট কিছু মান বের করা
let numbers5 = [10, 20, 30, 40, 50];

// let [protom, dutio,...rest] = numbers5;
// console.log(protom)
// console.log(ditio)



/* ৩️⃣ Template Literals (ব্যাকটিক )
Template Literals হলো স্ট্রিং লিখার নতুন পদ্ধতি, যা + অপারেটর ছাড়াই ডাইনামিক ভ্যালু যোগ করতে সাহায্য করে। */


// 🔹 সাধারণ স্ট্রিং কনক্যাটেনেশন (আগের পদ্ধতি)
// let name = "Rahim";
// let age = 25;

// console.log("My name is " + name + " and I am " + age + " years old.");
// 👉 এটি লিখতে অনেক + চিহ্ন ব্যবহার করতে হচ্ছে, যা বিরক্তিকর ও জটিল।

// 🔹 Template Literals ( ) ব্যবহার করে সহজ উপায়

/* let name = "Rahim";
let age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
 */
// 👉 এটি পরিষ্কার ও সহজবোধ্য, কারণ ${} এর ভিতরে ভ্যারিয়েবল বা এক্সপ্রেশন ব্যবহার করা যায়।

/* 🔹 মাল্টি-লাইন স্ট্রিং সহজ করা
আগে মাল্টি-লাইন স্ট্রিং লিখতে \n ব্যবহার করতে হতো। */
console.log("Hello,\nWelcome to JavaScript!");

// ✅ নতুন পদ্ধতি (Template Literals)
console.log(`Hello,
    Welcome to JavaScript!`);


// 🔹 টেমপ্লেট লিটারালে এক্সপ্রেশন ব্যবহার

/* let a = 10, b = 20;

console.log(`The sum of ${a} and ${b} is ${a + b}.`);
 */