// >>>> 1/15
// Throughout this lesson, you will learn how to:

// Represent real-world objects in JavaScript
// Access object properties
// Access object methods
// Create object getter and setter methods

// >>>> 2/15
// let restaurant = {
//     name: 'Italian Bistro',
//     seatingCapacity: 120,
//     hasDineInSpecial: true,
//     entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine Pesto']
// };

// let person = {
//     name: 'Fulvio',
//     age: 53
// };

// >>>> 3/15
// let restaurant = {
//     name: 'Italian Bistro',
//     seatingCapacity: 120,
//     hasDineInSpecial: true,
//     entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto']
// };

// console.log(restaurant.entrees);

// let person = {
//     name: 'Fulvio',
//     age: 53
// };

// console.log(person.name)
// console.log(person.age)

//   >>>> 4/15
// let restaurant = {
//     name: 'Italian Bistro',
//     seatingCapacity: 120,
//     hasDineInSpecial: true,
//     entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto']
// };

// console.log(restaurant['entrees']);

// let person = {
//     name: 'Fulvio',
//     age: 53
// };

// console.log(person['name'])
// console.log(person['age'])

// // >>>> 5/15
// let meal = 'none';
// let time = 12;
// // We'll use military time for this example, counting hours 0-23.

// const restaurantSpecials = {
//  breakfast: 'The breakfast special is 20% off freshly squeezed orange juice',
//  lunch: 'The lunch special is 10% off appetizers',
//  none: 'There are no specials currently'
// };

// if (time < 11) { // 11 am
//   meal = 'breakfast';
// } else if (time < 17) { // 5 pm
//   meal = 'lunch';
// }

// console.log(restaurantSpecials[meal]);
// -----------------------------------------------------------------
// Bracket notation is required 
// to use variables to look up keys 
// within an object. 

// It's not possible to use variables like this with dot notation.
// -----------------------------------------------------------------

// let alarm;
// let day = 'Wed';

// let person = {
//     name: 'Fulvio',
//     age: 53,
//     weekendAlarm: 'No alarms needed',
//     weekAlarm: 'Alarm set to 7AM'
// };

// if (day === 'Saturday' || day === 'Sunday') {
//     alarm = 'weekendAlarm';
// } else {
//     alarm = 'weekAlarm';
// }

// console.log(person[alarm])

// >>>> 6/15
// let alarm;
// let day = 'Wed';

// let person = {
//     name: 'Fulvio',
//     age: 53,
//     weekendAlarm: 'No alarms needed',
//     weekAlarm: 'Alarm set to 7AM'
// };

// person.hobbies = ['coding', 'gaming']

// if (day === 'Saturday' || day === 'Sunday') {
//     alarm = 'weekendAlarm';
// } else {
//     alarm = 'weekAlarm';
// }

// console.log(person[alarm])
// console.log(person.hobbies)

// >>>> 7/15
// let alarm;
// let day = 'Wed';

// let person = {
//     name: 'Fulvio',
//     age: 53,
//     weekendAlarm: 'No alarms needed',
//     weekAlarm: 'Alarm set to 7AM'
// };

// person.hobbies = ['coding', 'gaming']
// person.hobbies = ['gym', ]

// if (day === 'Saturday' || day === 'Sunday') {
//     alarm = 'weekendAlarm';
// } else {
//     alarm = 'weekAlarm';
// }

// console.log(person[alarm])
// console.log(person.hobbies)

// >>>> 8/15
// const restaurant = {
//     name: 'Italian Bistro',
//     seatingCapacity: 120,
//     hasDineInSpecial: true,
//     entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
//     openRestaurant: () => {
//         return 'Unlock the door, flip the open sign. We are open for business!';
//     },
//     closeRestaurant: () => {
//         return 'Lock the door, flip the open sign. We are closed.'
//     }
// };

// console.log(restaurant.openRestaurant());

// console.log(restaurant.closeRestaurant());
// ---------------------------------------------------------------------------------

// let alarm;
// let day = 'Wed';

// let person = {
//     name: 'Fulvio',
//     age: 53,
//     weekendAlarm: 'No alarms needed',
//     weekAlarm: 'Alarm set to 7AM',
//     sayHello: () => {
//         return 'Hello, there!'
//     }
// };


// person.hobbies = ['coding', 'gaming']
// person.hobbies = ['gym', ]

// if (day === 'Saturday' || day === 'Sunday') {
//     alarm = 'weekendAlarm';
// } else {
//     alarm = 'weekAlarm';
// }

// console.log(person[alarm])
// console.log(person.hobbies)
// console.log(person.sayHello())

// >>>> 9/15
// const restaurant = {
//     name: 'Italian Bistro',
//     seatingCapacity: 120,
//     hasDineInSpecial: true,
//     entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

//     openRestaurant() {
//         return 'Unlock the door, flip the open sign. We are open for business!';
//     },
//     closeRestaurant() {
//         return 'Lock the door, flip the open sign. We are closed.'
//     }
// }

let alarm;
let day = 'Wed';

let person = {
    name: 'Fulvio',
    age: 53,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    sayHello: () => {
        return 'Hello, there!'
    },
    sayGoodbye() {
        return 'Goodbye!'
    }
};


person.hobbies = ['coding', 'gaming']
person.hobbies = ['gym', ]

if (day === 'Saturday' || day === 'Sunday') {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person[alarm])
console.log(person.hobbies)

// >>>> 10/15