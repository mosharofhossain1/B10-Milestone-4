/* অপারেটর ব্যবহার করে আমরা গাণিতিক ও লজিক্যাল কাজ করতে পারি।
 */

// ১. Arithmetic Operators (গাণিতিক অপারেটর)
// ২. Assignment Operators (মান অ্যাসাইন করার অপারেটর)
// ৩. Comparison Operators (তুলনা করার অপারেটর)
// ৪. Logical Operators (লজিক্যাল অপারেটর)

// 1.Arithmetic Operator explain
let a = 10;
let b = 3;

console.log(a + b); // যোগফল (13)
console.log(a - b); // বিয়োগফল (7)
console.log(a * b); // গুণফল (30)
console.log(a / b); // ভাগফল (3.33)
console.log(a % b); // ভাগশেষ (1)
console.log(a ** b); // পাওয়ার (১০³ = 1000)



// Assignment Operators explain
let x = 10;
x += 5; // x = x + 5  => 15
x -= 3; // x = x - 3  => 12
x *= 2; // x = x * 2  => 24
x /= 4; // x = x / 4  => 6


// 3.Comparison Operators explain
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 == "10"); // true (কেবলমাত্র মান চেক করে)
console.log(10 === "10"); // false (মান ও টাইপ দুটোই চেক করে)
console.log(10 !== 5); // true


// 4.Logical Operators explain
let hasMoney = true;
let hasCard = false;

console.log(hasMoney && hasCard); // false (দুইটা শর্ত পূরণ হলে true)
console.log(hasMoney || hasCard); // true (যেকোনো একটা শর্ত পূরণ হলে true)
console.log(!hasMoney); // false (বিপরীত মান দেয়)



