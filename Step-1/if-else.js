/* কন্ডিশনাল স্টেটমেন্ট (if-else, switch)
কোনো নির্দিষ্ট শর্ত অনুযায়ী সিদ্ধান্ত নেওয়ার জন্য কন্ডিশনাল স্টেটমেন্ট ব্যবহার করা হয়। */

let age = 19;

if (age >= 18) {
    console.log("আপনি ভোট দিতে পারবেন।");
} else {
    console.log("আপনি এখনও ভোট দেওয়ার জন্য অযোগ্য।");
}

// Switch Statment explain 

let day = "Friday";

switch (day) {
    case "Monday":
        console.log('today is monday');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday');
        break;
    case 'Friday':
        console.log('Today is Friday');
        break;
    default:
        console.log('Another Day');
}
