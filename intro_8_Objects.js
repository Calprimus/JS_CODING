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

// let alarm;
// let day = 'Wed';

// let person = {
//     name: 'Fulvio',
//     age: 53,
//     weekendAlarm: 'No alarms needed',
//     weekAlarm: 'Alarm set to 7AM',
//     sayHello: () => {
//         return 'Hello, there!'
//     },
//     sayGoodbye() {
//         return 'Goodbye!'
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

// >>>> 10/15
// const restaurant = {
//     name: 'Italian Bistro',
//     seatingCapacity: 120,
//     hasDineInSpecial: true,
//     entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
//     openRestaurant: function() {
//         if (this.hasDineInSpecial) {
//             return 'Unlock the door, post the special on the board, then flip the open sign.'
//         } else {
//             return 'Unlock the door, then flip the open sign.'
//         }
//     }
// }

// console.log(restaurant.openRestaurant());

// let alarm;
// let day = 'Wed';

// let person = {
//     name: 'Fulvio',
//     age: 53,
//     weekendAlarm: 'No alarms needed',
//     weekAlarm: 'Alarm set to 7AM',
//     sayHello() {
//         return 'Hello, my name is ' + this.name
//     },
//     sayGoodbye() {
//         return 'Goodbye!'
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

// >>>> 11/15
// let myObj = {
//     name: 'Miti',
//     sayHello() {
//       return `${this.name} says hello!`;
//     }
//   };

//   let yourObj = {
//     name: 'Timer'
//   };

//   yourObj.sayHello = myObj.sayHello;
//   // Sets the sayHello method on yourObj to be the sayHello method on yourObj

// let alarm;
// let day = 'Wed';

// let person = {
//     name: 'Fulvio',
//     age: 53,
//     weekendAlarm: 'No alarms needed',
//     weekAlarm: 'Alarm set to 7AM',
//     sayHello() {
//         return `Hello, my name is ${this.name}`
//     },
//     sayGoodbye() {
//         return 'Goodbye!'
//     }
// };

// let friend = { name: 'Giulio' };
// friend.sayHello = person.sayHello;

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
// console.log(friend.sayHello())

// >>>> 12/15
// let restaurant = {
//     name: 'Italian Bistro',
//     seatingCapacity: 120,
//     hasDineInSpecial: true,
//     entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine Pesto']
// }


// let restaurant = {
//     _name: 'Italian Bistro',
//     _seatingCapacity: 120,
//     _hasDineInSpecial: true,
//     _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

//     set seatingCapacity(newCapacity) {
//         if (typeof newCapacity === 'number') {
//             this._seatingCapacity = newCapacity;
//             console.log(`${newCapacity} is valid input.`);
//         } else {
//             console.log(`Change ${newCapacity} to a number.`)
//         }
//     }
// }

// let person = {
//     _name: 'Lu Xun',
//     _age: 137,

//     set age(val) {
//         if (typeof val === 'number') {
//             this._age = val;
//         } else {
//             return 'Invalid input'
//         }
//     }
// };

// >>>> 13/15
// let restaurant = {
//     _name: 'Italian Bistro',
//     _seatingCapacity: 120,
//     _hasDineInSpecial: true,
//     _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

//     set seatingCapacity(newCapacity) {
//         if (typeof newCapacity === 'number') {
//             this._seatingCapacity = newCapacity;
//             console.log(`${newCapacity} is valid input.`);
//         } else {
//             console.log(`Change ${newCapacity} to a number.`);
//         }
//     }
// }

// // Sets the _seatingCapacity value to 150
// restaurant.seatingCapacity = 150; //150 is valid input.

// >>>> 14/15
// let restaurant = {
//     _name: 'Italian Bistro',
//     _seatingCapacity: 120,
//     _hasDineInSpecial: true,
//     _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

//     set seatingCapacity(newCapacity) {
//         if (typeof newCapacity === 'number') {
//             this._seatingCapacity = newCapacity;
//         } else {
//             console.log(`Change ${newCapacity} to a number.`)
//         }
//     },

//     get seatingCapacity() {
//         console.log(`There are ${this._seatingCapacity} seats at Italian Bistro.`);
//         return this._seatingCapacity;
//     }
// }
// ------------------------------
// In the example above, the getter method (get seatingCapacity()) 
// logs something to the console and returns the value saved to _seatingCapacity. 
// We call the getter method the same way we would access a property without a method:
// ------------------------------
// restaurant.seatingCapacity = 150;
// const seats = restaurant.seatingCapacity;
// ------------------------------
// In this example we set the seatingCapacity to 150, 
// then call the getter method using restaurant.seatingCapacity 
// and save the result to a variable called seats. 
// The getter will also log the following line of code to the console:
// >>There are 150 seats at Italian Bistro.
// --------------------------------

let person = {
    _name: 'Lu Xun',
    _age: 137,

    set age(val) {
        if (typeof val === 'number') {
            this._age = val;
        } else {
            return 'Invalid input'
        }
    },

    get age() {
        console.log(`${this._name} is ${this._age} years old`)
    }
};

console.log(person.age)

// >>>> 15/15