/* 
🔹 জাভাস্ক্রিপ্ট অবজেক্ট (JavaScript Object) কী?
জাভাস্ক্রিপ্টে অবজেক্ট (Object) হলো একটি ডাটা স্ট্রাকচার, যা key-value pair আকারে ডাটা সংরক্ষণ করে।

👉 সহজভাবে বললে, অবজেক্ট হলো এমন একটি কন্টেইনার, যেখানে প্রোপার্টি (Property) এবং মেথড (Method) থাকে।

প্রোপার্টি (Property) = অবজেক্টের মধ্যে থাকা ডাটা (Key: Value আকারে)।
মেথড (Method) = অবজেক্টের মধ্যে থাকা ফাংশন (Function) */


// 🔹 জাভাস্ক্রিপ্টে অবজেক্ট কিভাবে তৈরি করা যায়?
// ১. অবজেক্ট লিটারাল {} দিয়ে তৈরি করা (সাধারণ পদ্ধতি)

let person = {
    name: "Rahim",
    age: 23,
    city: "mymensingh"
}

console.log(person);


// 2. new Object() কন্সট্রাক্টর দিয়ে অবজেক্ট তৈরি করা

let member = new Object();
member.name = 'Kadimul kha';
member.age = '32';
member.city = 'Bowla'
console.log(member);

/* 🔹 অবজেক্টের প্রপার্টি এক্সেস করার উপায়
অবজেক্টের প্রপার্টি (Property) দুইভাবে এক্সেস করা যায়:
1️⃣ ডট নোটেশন (.) ব্যবহার করে
2️⃣ ব্র্যাকেট নোটেশন ([]) ব্যবহার করে */

// ➤ ডট নোটেশন
console.log(person.name)
console.log(person.age)
console.log(person.city)

// ➤ ব্র্যাকেট নোটেশন
console.log(person['name']);
console.log(person['age'])
console.log(person['city'])


/* 👉 কখন ব্র্যাকেট নোটেশন ব্যবহার করতে হবে?
যদি প্রপার্টির নাম স্পেস বা বিশেষ চিহ্ন (symbol) থাকে, তাহলে ব্র্যাকেট নোটেশন ব্যবহার করতে হবে।
 */

let user = {
    "full name": "Ayesha Akter",
    "user-id": 101
};

console.log(user["full name"]);  // "Ayesha Akter"
console.log(user["user-id"]);    // 101

/* 🔹 অবজেক্টের প্রপার্টি যোগ করা, পরিবর্তন করা, মুছে ফেলা

➤ নতুন প্রপার্টি যোগ করা */
person.religius = 'Islam';
console.log(person)

// ➤ প্রপার্টির মান পরিবর্তন করা
person.age = 43;
console.log(person)

// ➤ প্রপার্টি মুছে ফেলা (delete)
delete person.city;
console.log(person)

/* 🔹 অবজেক্টের মধ্যে ফাংশন (Method) রাখা
অবজেক্টের মধ্যে ফাংশন সংরক্ষণ করলে তাকে মেথড (Method) বলে। */

let person2 = {
    name: 'Abdul Karim',
    age: 45,
    city: 'Naogaon',
    greet: function () {
        console.log(`Good Evinig My name is ${this.name} and i am ${this.age} Year of Old`)
    }
}
person2.greet()

/* 🔹 জাভাস্ক্রিপ্টের অবজেক্ট লুপ করা
অবজেক্টের সমস্ত প্রপার্টি একসাথে এক্সেস করতে for...in লুপ ব্যবহার করা হয়। */

for (let key in person) {
    // console.log(key);
    console.log(`${key}: ${person[key]}`)
}


/* 🔹 অবজেক্টের গুরুত্বপূর্ণ মেথডসমূহ :- 

➤ Object.keys() – প্রপার্টির নামের অ্যারে তৈরি করে */

const personInfokeys = Object.keys(person);
console.log(personInfokeys);

// ➤ Object.values() – প্রপার্টির মানের অ্যারে তৈরি করে

const personInfoValues = Object.values(person);
console.log(personInfoValues);


// ➤ Object.entries() – কী-ভ্যালু পেয়ার অ্যারে তৈরি করে

const personInfoEntries = Object.entries(person);
console.log(personInfoEntries);


/* 🔹 অবজেক্ট নেস্টিং (অবজেক্টের মধ্যে অবজেক্ট)
অবজেক্টের মধ্যে অন্য অবজেক্ট রাখা যায়। */

let student = {
    name: 'Hedayet Ullah',
    age: 19,
    address: {
        home: 'Borishal',
        block: '2/1, Bangla Mutor area'
    },
    religius: 'Islam'
}

// console.log(student);
console.log(student.age)
console.log(student.address.home);

// add new element 
student.address.holding = 312;
console.log(student.address)

/* 🔹 অবজেক্টের অ্যারে (Multiple Objects in an Array)
একটি অ্যারের মধ্যে একাধিক অবজেক্ট সংরক্ষণ করা যায়। */

let students = [
    { name: 'Bablu Fokir', age: '31' },
    { name: 'Kabul', age: 33 },
    { name: 'Mahi', age: '45' }
]
console.log(students[0].name);


/* 🎯 উপসংহার
অবজেক্ট হলো key-value pair ফরম্যাটে ডাটা সংরক্ষণ করার একটি উপায়।
. এবং [] দিয়ে প্রপার্টি এক্সেস করা যায়।
অবজেক্টের ভেতরে ফাংশন রাখতে পারি, যাকে মেথড বলা হয়।
Object.keys(), Object.values(), এবং Object.entries() অবজেক্টের ডাটা এক্সেস করতে সাহায্য করে।
নেস্টেড অবজেক্ট এবং অবজেক্টের অ্যারে ব্যবহার করে আরও জটিল ডাটা স্ট্রাকচার তৈরি করা যায়।
🔹 চ্যালেঞ্জ:
👉 একটি "Book" অবজেক্ট তৈরি করুন, যেখানে title, author, price থাকবে এবং একটি getDetails() মেথড থাকবে, যা বইয়ের তথ্য প্রিন্ট করবে। 🚀😊 */