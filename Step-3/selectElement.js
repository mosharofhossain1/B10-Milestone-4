//🔹 ১. getElementById() - ID দিয়ে এলিমেন্ট সিলেক্ট করা
// 📌 একটি HTML এলিমেন্টকে তার id ব্যবহার করে সিলেক্ট করতে getElementById() মেথড ব্যবহার করা হয়।


// ✅ উদাহরণ: h1 এলিমেন্ট খুঁজে তা পরিবর্তন করা
let heading = document.getElementById('title');
heading.innerText = 'JavaScript Is Very Powepul Leanguage';
heading.style.backgroundColor = 'orange';
heading.style.padding = '10px';
heading.style.borderRadius = '10px'

// 👉 getElementById("title") দিয়ে id="title" এর h1 এলিমেন্ট খুঁজে পাওয়া গেছে এবং তার টেক্সট পরিবর্তন করা হয়েছে।

/* 🔹 ২. querySelector() - CSS সিলেক্টর ব্যবহার করে এলিমেন্ট খোঁজা
📌 querySelector() মেথড ব্যবহার করে আমরা id, class, tag বা attribute দিয়ে এলিমেন্ট সিলেক্ট করতে পারি। */

// ✅ উদাহরণ: প্রথম p এলিমেন্ট খুঁজে টেক্সট পরিবর্তন করা
let paragraph = document.querySelector('.description');
paragraph.innerText = 'Welcome to the JavaScript world!'

// 👉 querySelector(".description") দ্বারা প্রথম p এলিমেন্ট পাওয়া গেছে, এবং টেক্সট পরিবর্তন করা হয়েছে।

// 🔹 ৩. addEventListener() - ইভেন্ট যোগ করা (যেমন ক্লিক, হোভার ইত্যাদি)
// 📌 addEventListener() মেথড দিয়ে HTML এলিমেন্টে ইভেন্ট যোগ করা যায়।

let button = document.getElementById('btn');

button.addEventListener('click', function () {
    let heading = document.getElementById('title');
    heading.innerText = 'You Click The Button';
});


//👉 যখন ইউজার বোতামে ক্লিক করবে, তখন h1 ট্যাগের টেক্সট পরিবর্তন হবে। 🚀