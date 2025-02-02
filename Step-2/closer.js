/* 🔹 জাভাস্ক্রিপ্ট ক্লোজার (Closures) এবং কলব্যাক ফাংশন (Callback Functions) ব্যাখ্যা (বাংলায়) */

// জাভাস্ক্রিপ্টের ক্লোজার (Closures) এবং কলব্যাক ফাংশন (Callback Functions) হলো অ্যাডভান্সড কনসেপ্ট, যা ফাংশনের কার্যপদ্ধতি, স্কোপ, এবং অ্যাসিনক্রোনাস প্রোগ্রামিং বুঝতে সাহায্য করে।

/* 🔹 ক্লোজার (Closures)
Closures কী?
ক্লোজার হলো একটি ফাংশন, যা তার পারেন্ট ফাংশনের স্কোপ (Scope) থেকে ডাটা বা ভ্যারিয়েবল এক্সেস করতে পারে, এমনকি পারেন্ট ফাংশন শেষ হয়ে যাওয়ার পরেও।

👉 সহজভাবে বললে, যখন একটি ইনার ফাংশন (Inner Function) আউটার ফাংশনের (Outer Function) ভেরিয়েবল এক্সেস করতে পারে, তখন সেটিকে ক্লোজার বলা হয়। */


// ✅ ক্লোজারের ব্যবহার

function outerFunc() {
    let count = 0;
    function innerFunc() {
        count++;
        console.log(count)
    }
    return innerFunc;
}

let counter = outerFunc();
counter();
counter();
counter();

/* কিভাবে কাজ করছে?
1️⃣ outerFunction() কল করলে count ভ্যারিয়েবল তৈরি হয়।
2️⃣ innerFunction() রিটার্ন হয়, যা counter ভ্যারিয়েবলে সংরক্ষিত থাকে।
3️⃣ counter() বারবার কল করলে count ভ্যারিয়েবল সংরক্ষিত থাকে এবং বাড়তে থাকে, কারণ innerFunction() এখনও outerFunction()-এর count এক্সেস করতে পারছে (Closures)। */

// ✅ আরেকটি ক্লোজার উদাহরণ (ফাংশন প্যারামিটার সহ)
function greet(name) {
    return function (message) {
        console.log(`${message}, ${name}!`);
    };
}

let sayHello = greet("Rahim");

sayHello("Good Morning");  // Good Morning, Rahim!
sayHello("Hello");         // Hello, Rahim!

/* 🔹 কলব্যাক ফাংশন (Callback Functions)
Callback Function কী?
একটি ফাংশন যখন আরেকটি ফাংশনের প্যারামিটার হিসেবে পাঠানো হয় এবং নির্দিষ্ট শর্তে এক্সিকিউট হয়, তখন তাকে কলব্যাক ফাংশন বলে।

📌 সাধারণত, কলব্যাক ফাংশন ব্যবহার করা হয়:
✔ অ্যাসিনক্রোনাস অপারেশন (Asynchronous Operations)
✔ ইভেন্ট হ্যান্ডলিং (Event Handling)
✔ ডাটা প্রসেসিং (Data Processing) */

// ✅ সাধারণ কলব্যাক ফাংশনের উদাহরণ
function processData(data, callback) {
    console.log('Data Processing : ', data);
    callback();
}

function onComplate() {
    console.log('Data Processing Compleate', 2 + 2)
}

processData('User Info', onComplate)

// ✅ সেটটাইমআউট (setTimeout) দিয়ে কলব্যাক
setTimeout(function () {
    console.log('Hello I am Denayed')
}, 2000)

// 👉 setTimeout()-এ একটি ফাংশন কলব্যাক হিসেবে দেওয়া হয়েছে, যা ২ সেকেন্ড পর এক্সিকিউট হবে।

// ✅ অ্যারে মেথডে কলব্যাক ফাংশন (forEach, map, filter)

// 🔹 forEach() ব্যবহার করে কলব্যাক ফাংশন:
let numbers = [1, 2, 3, 4];
numbers.forEach(function (num) {
    console.log(num * 2);
});

// 🔹 map() ব্যবহার করে কলব্যাক ফাংশন:
let doubleNumbers = numbers.map(function (num) {
    return num + 2
})
console.log(doubleNumbers)