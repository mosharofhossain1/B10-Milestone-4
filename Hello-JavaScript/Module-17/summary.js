// 1. Variable Declear :- var , let, const
// 2. Variabel Types :- Number, String, Boolean, null, undifinied
// 3. Math Operation :- +,-,*,/,%
// 4. Math ShortHand :- +=, -=, *=, /=, %=
// 4. Number Methods :- parseFloat(), parseInt(), toFixed();

// Practice Tasks :-
// 1. null variable :-
/*
JavaScript-এ null বুঝিয়ে বলা (বাংলায়)
null হল একটি বিশেষ মান যা জাভাস্ক্রিপ্টে ইচ্ছাকৃতভাবে "কোনো মূল্য নেই" বা "ফাঁকা মান" বোঝাতে ব্যবহার করা হয়। এটি একটি primitive value এবং object data type এর অন্তর্ভুক্ত।

১. null এর মূল বৈশিষ্ট্যঃ
ইচ্ছাকৃতভাবে ফাঁকা বা শূন্য মান বোঝাতে ব্যবহার করা হয়।
এটি typeof অপারেটর ব্যবহার করলে "object" রিটার্ন করে, যা জাভাস্ক্রিপ্টের একটি পুরনো বাগ।
এটি falsy value, মানে এটি if শর্তে false হিসেবে গণ্য হয়।


২. null এর উদাহরণঃ
let name = null;  // মানে 'name' ভ্যারিয়েবলটি ফাঁকা বা খালি
console.log(name); // Output: null

৩. typeof null কেন "object" দেখায়?
console.log(typeof null); // Output: "object"

এটি জাভাস্ক্রিপ্টের পুরনো একটি বাগ, তবে এটি ঠিক করা হয়নি কারণ এটি বহু পুরনো কোডের সাথে সামঞ্জস্যপূর্ণ রাখতে হয়েছে।


৫. null চেক করার উপায়

let value = null;

if (value === null) {
    console.log("মানটি null");
} else {
    console.log("মানটি null নয়");
}


উপসংহার :-
null হল একটি ইচ্ছাকৃত ফাঁকা মান।
এটি undefined থেকে আলাদা কারণ undefined মানে একেবারেই মান সেট করা হয়নি, আর null মানে সেট করা হলেও ফাঁকা রাখা হয়েছে।
typeof null একটি পুরনো বাগের কারণে "object" দেখায়।

*/

// 2. Undifined Explain :

/*
    JavaScript-এ undefined বুঝিয়ে বলা (বাংলায়)
undefined হল JavaScript-এর একটি primitive value যা বোঝায় যে কোনো ভেরিয়েবলের মান নির্ধারিত হয়নি বা সেট করা হয়নি। অর্থাৎ, যদি কোনো ভেরিয়েবল ডিক্লেয়ার করা হয় কিন্তু তাকে কোনো মান দেওয়া না হয়, তাহলে তার ডিফল্ট মান হবে undefined।

১. undefined কখন পাওয়া যায়?
i) ভেরিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু মান দেওয়া হয়নি
let a;
console.log(a); // Output: undefined

👉 এখানে a ভেরিয়েবলটি ডিক্লেয়ার করা হয়েছে কিন্তু কোনো মান দেওয়া হয়নি, তাই এটি undefined রিটার্ন করেছে।

ii) ফাংশনের কোনো রিটার্ন ভ্যালু না থাকলে
function test() {
}
console.log(test()); // Output: undefined

👉 ফাংশনের কোনো return স্টেটমেন্ট নেই, তাই এটি undefined ফেরত দিচ্ছে।


iii) অব্যবহৃত অবজেক্ট প্রোপার্টি অ্যাক্সেস করলে
let obj = { name: "John" };
console.log(obj.age); // Output: undefined

👉 obj অবজেক্টের মধ্যে age নামের কোনো প্রোপার্টি নেই, তাই এটি undefined রিটার্ন করেছে।


iv) অ্যারে ইনডেক্স অ্যাক্সেস করার সময় ভুল ইনডেক্স দিলে
let arr = [10, 20, 30];
console.log(arr[5]); // Output: undefined
👉 arr অ্যারেতে index 5 এ কোনো উপাদান নেই, তাই এটি undefined দেখাচ্ছে।


=> ৩. undefined চেক করার উপায়

let value;

if (value === undefined) {
    console.log("মানটি undefined");
} else {
    console.log("মানটি undefined নয়");
}



৪. undefined কে null এ পরিবর্তন করা
অনেক সময় ডাটা পরিষ্কার করার জন্য undefined কে null এ পরিবর্তন করা হয়:
let value;
value = value ?? null;
console.log(value); // Output: null
👉 ?? (Nullish Coalescing Operator) ব্যবহার করলে যদি value undefined হয়, তাহলে সেটি null হয়ে যাবে।

উপসংহার
undefined তখনই হয় যখন কোনো ভেরিয়েবলের মান সেট করা হয়নি।
ফাংশন রিটার্ন ভ্যালু না দিলে, অব্যবহৃত অবজেক্ট প্রোপার্টি অ্যাক্সেস করলে, বা অ্যারে থেকে ভুল ইনডেক্স ব্যবহার করলে undefined পাওয়া যায়।
undefined এবং null আলাদা—undefined মানে কিছু সেট করা হয়নি, আর null মানে ইচ্ছাকৃতভাবে খালি রাখা হয়েছে।
👉 যদি বুঝতে সমস্যা হয় বা কোনো প্রশ্ন থাকে, তাহলে জানাও! 😊
*/


// =========================isNaN Explain=======================
/* 

### JavaScript-এ `isNaN()` ব্যাখ্যা (বাংলায়)  

`isNaN()` হল JavaScript-এর একটি **বিল্ট-ইন ফাংশন**, যা চেক করে কোনো মান **সংখ্যা (number) নয় কিনা**। যদি কোনো মান **সংখ্যা না হয়**, তাহলে এটি `true` রিটার্ন করে, আর যদি সংখ্যা হয়, তাহলে `false` রিটার্ন করে।  


## **১. `isNaN()` এর কাজের নিয়ম**
- যদি পাস করা ভ্যালু **সংখ্যা না হয়**, তাহলে `true` রিটার্ন করবে।  
- যদি ভ্যালুটি **সংখ্যা হয়**, তাহলে `false` রিটার্ন করবে।  

```javascript
console.log(isNaN(100));     // false (কারণ 100 একটি সংখ্যা)
console.log(isNaN("Hello")); // true (কারণ এটি সংখ্যা নয়)
console.log(isNaN("123"));   // false (কারণ এটি সংখ্যায় কনভার্ট হতে পারে)
console.log(isNaN(true));    // false (কারণ true = 1 এবং এটি সংখ্যা)
console.log(isNaN(NaN));     // true (কারণ NaN নিজেই "Not a Number")
```

## **২. `isNaN()` এবং টাইপ কনভার্সন সমস্যা**
`isNaN()` ফাংশন ভ্যালুটিকে **Number টাইপে কনভার্ট করার চেষ্টা করে**, তারপর চেক করে এটি সংখ্যা কিনা।  

```javascript
console.log(isNaN("123"));   // false (কারণ "123" সংখ্যায় কনভার্ট হতে পারে)
console.log(isNaN("123abc"));// true (কারণ এটি সংখ্যায় কনভার্ট হতে পারে না)
console.log(isNaN(""));      // false (কারণ "" কে 0 ধরা হয়, যা সংখ্যা)
console.log(isNaN(" "));     // false (কারণ " " কে 0 ধরা হয়)
console.log(isNaN(undefined)); // true (কারণ undefined সংখ্যা নয়)
console.log(isNaN(null)); // false (কারণ null কে 0 ধরা হয়, যা সংখ্যা)
```

## **৩. `Number.isNaN()` – আরো নির্ভরযোগ্য পদ্ধতি**
👉 `Number.isNaN()` হলো `isNaN()` এর একটি উন্নত সংস্করণ, যা শুধুমাত্র **NaN মান থাকলে** `true` রিটার্ন করবে। এটি টাইপ কনভার্সন করে না।  

`javascript
console.log(Number.isNaN("123"));   // false (কারণ এটি টাইপ কনভার্ট করে না)
console.log(Number.isNaN("123abc"));// false (কারণ এটি টাইপ কনভার্ট করে না)
console.log(Number.isNaN(NaN));     // true (কারণ NaN প্রকৃতপক্ষে সংখ্যা নয়)
console.log(Number.isNaN(undefined)); // false (কারণ এটি সরাসরি NaN নয়)
```
👉 `Number.isNaN()` ব্যবহারের সুবিধা হলো এটি **টাইপ কনভার্সন এড়িয়ে চলে**, তাই এটি বেশি নির্ভরযোগ্য।  


## **৪. `isNaN()` ব্যবহার করে ইনপুট চেক করা**
```javascript
function checkNumber(value) {
    if (isNaN(value)) {
        console.log("এটি একটি বৈধ সংখ্যা নয়!");
    } else {
        console.log("এটি একটি বৈধ সংখ্যা!");
    }
}

checkNumber(50);     // এটি একটি বৈধ সংখ্যা!
checkNumber("Hello"); // এটি একটি বৈধ সংখ্যা নয়!
checkNumber("123");   // এটি একটি বৈধ সংখ্যা! (কারণ এটি সংখ্যায় কনভার্ট হতে পারে)
```

## **উপসংহার**
✅ `isNaN()` চেক করে কোনো মান **সংখ্যা কিনা**।  
✅ এটি ইনপুটকে **সংখ্যায় রূপান্তর করার চেষ্টা করে**, তারপর চেক করে এটি `NaN` কিনা।  
✅ **`Number.isNaN()`** বেশি নির্ভরযোগ্য কারণ এটি **টাইপ কনভার্সন করে না**।  
✅ যখন ইনপুট সংখ্যা কিনা চেক করা দরকার, তখন **`Number.isNaN()` ব্যবহার করা ভালো**।  

---

### **তুমি যদি আরও জানতে চাও, তাহলে বলতে পারো! 😊**
*/