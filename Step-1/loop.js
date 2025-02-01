/* লুপ (Loops) : 
একই কোড বারবার চালানোর জন্য লুপ ব্যবহার করা হয়। */


// 1. while loop
let i = 1;

while (i <= 5) {
    console.log(i)
    i++;
}

console.log("==========for loop start===========")
// 2. for loop

for (let i = 1; i <= 10; i++) {
    console.log(i);

}


console.log("=========do while loop start===========")

// 3. do-while loop

let x = 1;
do {
    console.log(x);
    x++;
} while (x <= 5);