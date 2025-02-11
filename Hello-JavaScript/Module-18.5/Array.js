// 1. অ্যারে কী?
// 👉 অ্যারে (Array) হল একটি ডাটা স্ট্রাকচার, যেখানে একাধিক মান (values) একসাথে একটি ভেরিয়েবলে সংরক্ষণ করা যায়। সাধারণ ভেরিয়েবলে একটি মাত্র মান রাখা যায়, কিন্তু অ্যারেতে একাধিক মান রাখা সম্ভব।

let numbers = [10, 20, 30, 40, 50];
console.log(numbers); // Output: [10, 20, 30, 40, 50]

// এখানে numbers ভেরিয়েবলে ৫টি সংখ্যা সংরক্ষিত আছে।

// 2. অ্যারে ডিক্লেয়ার করার উপায়
// (i) Square Brackets ([]) ব্যবহার করে (সাধারণ পদ্ধতি)

let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits); // Output: ["Apple", "Mango", "Banana"]

// (ii) new Array() কন্সট্রাক্টর ব্যবহার করে
let colors = new Array("Red", "Green", "Blue");
console.log(colors); // Output: ["Red", "Green", "Blue"]

// ✅ প্রথম পদ্ধতি ([]) বেশি ব্যবহার করা হয় কারণ এটি সহজ এবং সংক্ষিপ্ত।

// 3. অ্যারেতে ইনডেক্স (Index) এবং অ্যাক্সেস করা
// ✅ অ্যারেতে প্রতিটি উপাদানের (element) নিজস্ব ইনডেক্স নম্বর থাকে।
// ✅ ইনডেক্স শুরু হয় 0 থেকে।

// let fruits = ["Apple", "Mango", "Banana"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);


// 4. অ্যারেতে মান পরিবর্তন (Update) করা

// let fruits = ["Apple", "Mango", "Banana"];
// fruits[1] = "Orange";
// console.log(fruits); // Output: ["Apple", "Orange", "Banana"]
// ✅ এখানে fruits[1] ছিল "Mango", সেটিকে "Orange" দিয়ে পরিবর্তন করা হয়েছে।



// 5. অ্যারের দৈর্ঘ্য (length) বের করা
// let numbers = [10, 20, 30, 40, 50];
console.log(numbers.length);

// ✅ length প্রপার্টি অ্যারের উপাদানগুলোর সংখ্যা বলে দেয়।

// 6. অ্যারেতে নতুন মান যোগ ও মুছে ফেলা
// (i) push() → শেষে নতুন মান যোগ করা

// let fruits = ["Apple", "Mango"];
fruits.push("Banana");
console.log(fruits);

// ✅ push() শেষে একটি নতুন উপাদান যোগ করে।

// (ii) pop() → শেষের মান মুছে ফেলা

fruits.pop();
console.log(fruits);
// ✅ pop() শেষের উপাদান মুছে ফেলে।

// (iii) unshift() → শুরুতে নতুন মান যোগ করা
fruits.unshift("Apple");
console.log(fruits); // Output: ["Apple", "Mango", "Banana"]
// ✅ unshift() শুরুর দিকে নতুন উপাদান যোগ করে।

// (iv) shift() → শুরু থেকে মান মুছে ফেলা

fruits.shift();
console.log(fruits);


// 7. অ্যারের লুপিং (Looping)
// (i) for লুপ দিয়ে

// let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// (ii) forEach() মেথড ব্যবহার করে

numbers.forEach(function (num) {
    console.log(num);
});


// (iii) for...of লুপ দিয়ে

for (let num of numbers) {
    console.log(num);
}

/* 8. গুরুত্বপূর্ণ অ্যারে মেথড (Methods)

মেথড	কাজ
push(value)	 -> অ্যারের শেষে নতুন মান যোগ করে
pop()	-> শেষের মান মুছে ফেলে
unshift(value)	-> অ্যারের শুরুতে নতুন মান যোগ করে
shift()	-> প্রথম উপাদান মুছে ফেলে
length	-> অ্যারের দৈর্ঘ্য দেয়
indexOf(value)	-> নির্দিষ্ট মানের ইনডেক্স খুঁজে দেয়
includes(value)	-> নির্দিষ্ট মান আছে কিনা চেক করে (true/false)
slice(start, end)	-> নির্দিষ্ট অংশ কপি করে নতুন অ্যারে তৈরি করে
splice(start, deleteCount, newItems...)	-> অ্যারে থেকে কিছু উপাদান মুছে ফেলে বা যোগ করে
join(separator)	-> সব উপাদানকে একটি স্ট্রিংয়ে রূপান্তর করে
reverse()	-> অ্যারে উল্টিয়ে দেয়
sort()	-> অ্যারে সাজায় (ডিফল্টভাবে অ্যালফাবেটিকালি)

 */


/* 
9. map(), filter(), এবং reduce() মেথড -> 
*/

// (i) map() → প্রতিটি উপাদানে কিছু অপারেশন চালিয়ে নতুন অ্যারে তৈরি করে

let doubled = numbers.map(num => num * 2);
console.log(doubled);

// (ii) filter() → নির্দিষ্ট শর্ত অনুযায়ী উপাদান বের করে নতুন অ্যারে তৈরি করে
let greaterThan20 = numbers.filter(num => num > 20);
console.log(greaterThan20);

// (iii) reduce() → সব উপাদানকে একত্র করে একক মান তৈরি করে
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

/* 🔹 উপসংহার
✅ অ্যারে একাধিক মান সংরক্ষণ করতে ব্যবহৃত হয়।
✅ push(), pop(), shift(), unshift() দিয়ে উপাদান যোগ/মুছতে পারি।
✅ map(), filter(), reduce() এর মতো শক্তিশালী মেথড রয়েছে।
✅ লুপ (for, forEach, for...of) ব্যবহার করে অ্যারের উপাদানগুলো এক্সেস করা যায়। */