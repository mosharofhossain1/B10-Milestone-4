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
