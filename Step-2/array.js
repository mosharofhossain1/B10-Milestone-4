/* অ্যারে (Arrays) ও এর গুরুত্বপূর্ণ মেথডস
অ্যারে হল একটি ডাটা স্ট্রাকচার, যেখানে একাধিক ভ্যালু সংরক্ষণ করা যায়। */

/* জাভাস্ক্রিপ্টে অ্যারে (Array) হলো এক ধরনের ডাটা স্ট্রাকচার, যেখানে একাধিক মান (Values) একসাথে সংরক্ষণ করা যায়। সাধারণ ভেরিয়েবলের মতো আলাদা আলাদা ভেরিয়েবল ব্যবহারের পরিবর্তে একটি অ্যারে ব্যবহার করে অনেকগুলো ডাটা একসাথে রাখা যায়। */

// ১. সরাসরি ভ্যালু দিয়ে অ্যারে তৈরি করা
let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits)

// ২. new Array() কন্সট্রাক্টর ব্যবহার করে অ্যারে তৈরি করা
let numebrs = new Array(1, 2, 3, 4, 5)
console.log(numebrs)

//  অ্যারের ইনডেক্স এবং এক্সেস (Index & Access)
// অ্যারের প্রথম উপাদানের ইনডেক্স ০, এরপরের গুলো ১, ২, ৩... এইভাবে থাকে।
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2])
console.log(fruits[3]) // output undifined 

// 🔹 অ্যারের উপাদান পরিবর্তন (Modify Elements)
fruits[1] = 'Pineapple';
console.log(fruits)

// 🔹 অ্যারেতে উপাদান যোগ করা এবং সরানো


// ➤ push() – নতুন উপাদান শেষ দিকে যোগ করে
fruits.push('Mango');

// ➤ pop() – শেষের উপাদান সরিয়ে ফেলে
fruits.pop();

// ➤ unshift() – নতুন উপাদান শুরুতে যোগ করে
fruits.unshift('Tomatto');
console.log(fruits)

// ➤ shift() – প্রথম উপাদান সরিয়ে ফেলে
fruits.shift()
console.log(fruits)

/* 🔹 অ্যারে লুপিং (Loop Through Array) :-
অ্যারের সব উপাদান লুপের মাধ্যমে একসাথে প্রিন্ট করা যায়। */

// ১. for লুপ ব্যবহার করে
for (let i = 0; i < fruits.length; i++) {
    console.log(i)
    console.log(fruits[i])
}

// ২. forEach() মেথড ব্যবহার করে
fruits.forEach(function (fruit) {
    console.log(fruit)
})

// ৩. map() মেথড ব্যবহার করে (নতুন অ্যারে তৈরি করতে)
let doudle = numebrs.map(num => num * 2);
console.log(doudle);

/* 📌 ৩. slice() এবং splice()
slice(start, end) একটি অংশ কেটে নেয় (মূল অ্যারে পরিবর্তন হয় না)
splice(start, count, newItems...) অ্যারে পরিবর্তন করে */

let arr = [10, 20, 30, 40, 50];
console.log(arr.slice(1, 4));  // [20, 30, 40]
arr.splice(2, 1, 35);          // [10, 20, 35, 40, 50]


// ➤ filter() – নির্দিষ্ট শর্ত অনুযায়ী উপাদান ফিল্টার করা
let filtered = numebrs.filter(num => num > 3);
console.log(filtered);


// ➤ find() – নির্দিষ্ট শর্ত অনুযায়ী প্রথম উপাদান খুঁজে বের করা
let findValue = numebrs.find(num => num > 4)
console.log(findValue);


// ➤ sort() – অ্যারে সাজানো (Ascending Order)

let nums = [2, , 9, 4, 8, 5, 1, 6];
const sortValue = nums.sort();
console.log(sortValue)

// ➤ reverse() – অ্যারে উল্টানো (Descending Order)
const reverseValue = nums.reverse();
console.log(reverseValue);


/* 📌 ৪. map(), filter(), reduce()
map() নতুন অ্যারে ফিরিয়ে দেয়
filter() নির্দিষ্ট শর্ত অনুযায়ী ফিল্টার করে
reduce() সব ভ্যালু মিলিয়ে একটি মান দেয় */
