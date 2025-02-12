const bottle = {
    brnad: 'Apple',
    price: 100,
    color: 'black',
}
// console.log(bottle);

// dot notation 
bottle.brnad = 'HongKong';

// Brecket notaion
bottle['color'] = 'Grey'

console.log(bottle)

// objcet keys 
const keys = Object.keys(bottle);
console.log(keys)
// valuse 
const values = Object.values(bottle)
console.log(values);

// nested objec 

const college = {
    name: 'VNC',
    class: [12, 34, , 56],
    unique: {
        result: 100,
        merit: '20student',
        address: {
            home: '32/2, purana polton',
            thana: 'dhanmondi'
        }
    },
    events: '30 Feb'
}

console.log(college.class)
console.log(college.unique.address)
console.log(college['name'])
college.area = 'Dhaka';
console.log(college)
console.log(college['unique'].address.home)



// for in use kore objcet looping 
