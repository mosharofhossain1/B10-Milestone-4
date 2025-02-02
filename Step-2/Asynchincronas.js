/* অ্যাসিনক্রোনাস জাভাস্ক্রিপ্ট (Asynchronous JavaScript) ব্যাখ্যা (বাংলায়)
জাভাস্ক্রিপ্ট একটি সিঙ্গেল-থ্রেডেড ল্যাঙ্গুয়েজ, যা সাধারণত কোড সিরিয়ালভাবে (একটার পর একটা) এক্সিকিউট করে। কিন্তু কিছু ক্ষেত্রে আমাদের এমন কোড লিখতে হয়, যা পাশাপাশি (concurrently) বা নির্দিষ্ট সময় পর চলে—এটিই অ্যাসিনক্রোনাস (Asynchronous) জাভাস্ক্রিপ্ট।

📌 কেন অ্যাসিনক্রোনাস প্রোগ্রামিং প্রয়োজন?
✔ টাইমার (setTimeout, setInterval) ব্যবহারের জন্য
✔ সার্ভার থেকে ডাটা ফেচ করতে (API call, fetch, AJAX)
✔ ব্যাকগ্রাউন্ডে কাজ করার জন্য (file read, database query) */

/* ১️⃣ setTimeout() - নির্দিষ্ট সময় পরে ফাংশন চালানো
setTimeout() হলো একটি বিল্ট-ইন ফাংশন, যা নির্দিষ্ট সময় পর একটি ফাংশন চালায়। */

// ✅ উদাহরণ: ২ সেকেন্ড পর মেসেজ দেখানো

console.log('Start .........')

setTimeout(function () {
    console.log('SetTime FUnc is Running')
}, 5000);

console.log('Ending ..........')

// 👉 এখানে "End..." আগে প্রিন্ট হয়েছে, কারণ setTimeout() অ্যাসিনক্রোনাস, তাই এটি অপেক্ষা না করে পরবর্তী লাইনে চলে যায়।


/* ২️⃣ setInterval() - নির্দিষ্ট সময় পরপর ফাংশন চালানো
setInterval() হলো একটি ফাংশন, যা নির্দিষ্ট বিরতিতে (interval) বারবার চলে। */


// ✅ উদাহরণ: প্রতি ১ সেকেন্ড পর Hello দেখানো
setInterval(function () {
    console.log('InterVal Practice')
}, 1000)

// 👉 এটি প্রতি ১ সেকেন্ড পরপর "'InterVal Practice' দেখাবে।

// ✅ setInterval বন্ধ করা (clearInterval())
let count = 0;
let interVal = setInterval(function () {
    count++;
    console.log(`Count : ${count}`)

    if (count === 5) {
        clearInterval(interVal);
        console.log('Interval is Stoped ')
    }
}, 1000)

// 👉 clearInterval(interval) ব্যবহার করলে setInterval() বন্ধ হয়।



/* ৩️⃣ Promise - অ্যাসিনক্রোনাস কোড ম্যানেজ করার নতুন উপায়
Promise হলো একটি অবজেক্ট, যা ভবিষ্যতে সফল (resolve) বা ব্যর্থ (reject) হতে পারে। */

// ✅ সাধারণ Promise উদাহরণ
let myPromise = new Promise(function (resolve, reject) {
    let success = true; // কন্ডিশন চেক করা হবে
    if (success) {
        resolve("✅ Task completed!");
    } else {
        reject("❌ Task failed!");
    }
});

// Promise ব্যবহার করা (then & catch)
myPromise
    .then(function (result) {
        console.log(result); // ✅ Task completed!
    })
    .catch(function (error) {
        console.log(error);
    });

// 👉 resolve() হলে .then() ব্লক চলবে, আর reject() হলে .catch() ব্লক চলবে।


// ✅ setTimeout() ব্যবহার করে প্র্যাকটিকাল Promise উদাহরণ
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("✅ Data fetched successfully!");
            } else {
                reject("❌ Data fetch failed!");
            }
        }, 2000);
    });
}

// Promise ব্যবহার করা
fetchData()
    .then(result => console.log(result))
    .catch(error => console.log(error));




/* ৪️⃣ async/await - আরও সহজ অ্যাসিনক্রোনাস কোড */

/*
🔹 async কি?
async হল একটি কীওয়ার্ড, যা ফাংশনকে Promise রিটার্ন করতে বাধ্য করে।

🔹 await কি?
await হল একটি কীওয়ার্ড, যা Promise-এর রেজাল্ট পাওয়ার জন্য অপেক্ষা করে।
*/

// ✅ async/await দিয়ে সহজ Promise ব্যবহার
async function fetchData() {
    console.log("Fetching data...");

    let result = await new Promise(resolve => {
        setTimeout(() => resolve("✅ Data fetched successfully!"), 2000);
    });

    console.log(result);
}

fetchData();

// 👉 এখানে await Promise-এর রেজাল্ট পাওয়ার জন্য অপেক্ষা করছে, তাই কোড আরও পরিষ্কার দেখাচ্ছে।

// ✅ try...catch দিয়ে async/await Error Handling
async function fetchData() {
    try {
        console.log("Fetching data...");

        let result = await new Promise((resolve, reject) => {
            setTimeout(() => reject("❌ Data fetch failed!"), 2000);
        });

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

// 👉 try...catch ব্লক ব্যবহার করলে .catch() ছাড়াই Error হ্যান্ডেল করা যায়।

/* 
🎯 উপসংহার
📌 setTimeout() - নির্দিষ্ট সময় পরে ফাংশন চালায়।
📌 setInterval() - নির্দিষ্ট সময় পরপর ফাংশন চালায়।
📌 Promise - অ্যাসিনক্রোনাস অপারেশন পরিচালনার জন্য ব্যবহার হয়।
📌 async/await - Promise আরও সহজভাবে লিখতে সাহায্য করে।
*/