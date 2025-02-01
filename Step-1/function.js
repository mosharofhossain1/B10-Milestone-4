/* ফাংশন (Functions)
ফাংশন হল একটি নির্দিষ্ট কাজ সম্পাদনের জন্য কোডের একটি ব্লক। */

// ১. সাধারণ ফাংশন

function greet() {
    console.log('AssalamuAlkum');
}
greet();

function sayHello() {
    console.log('Hello Man. How are You?');

}
sayHello();


/* প্যারামিটার এবং আর্গুমেন্ট (Parameters & Arguments) :- 
ফাংশন প্যারামিটার গ্রহণ করতে পারে, যা ফাংশনের কাজের জন্য প্রয়োজনীয় ইনপুট প্রদান করে। */

function greeting(name) {
    console.log('Hello ' + name + '!');
}
greeting('SoliMulla vai');


/* রিটার্ন করা ফাংশন (Function with Return Statement) :- 
কিছু ফাংশন একটি নির্দিষ্ট মান ফেরত পাঠায় (return করে)। */

function add(a, b) {
    let result = a + b;
    return result;
}

const sum = add(5, 6);
console.log('The Sumation is :- ', sum)

const arrowFucn = () => {
    console.log('Arrow Func is Running')
}

arrowFucn();


// Problem solve -1 
function multiplication(a, b) {
    const multi = a * b
    return multi;
}
const multiAns = multiplication(4, 8);
console.log(multiAns);


// problen Solve -2  

function checkAge(age) {
    if (age >= 18) {
        console.log('You are Adult');
    }
    else { console.log('You are not an Adult Boy ') }
}

checkAge(18)

// Arrow function  using check age validitiy 
const checkAdult = (age) => age >= 18 ? 'Adult' : 'Not Adult';
console.log(checkAdult(17));


// Another problem solve - 3
function custome(age, name) {
    if (age >= 18) {
        console.log(name, "You are adult");
    }
    else if (age >= 0) {
        console.log(name, 'you re not adult gey')
    }

}

custome(18, 'Hassan');
custome(16, "Rahat")

// Problem -4 

