// >>>> 1/12
// let halley = {
//     _name: 'Halley',
//     _behavior: 0,

//     get name() {
//         return this._name;
//     },

//     get behavior() {
//         return this._behavior;
//     },

//     incrementBehavior() {
//         this._behavior++;
//     }
// }

// class Dog {
//     constructor(name) {
//         this._name = name;
//         this._behavior = 0;
//     }

//     get name() {
//         return this._name;
//     }
//     get behavior() {
//         return this._behavior;
//     }

//     incrementBehavior() {
//         this._behavior++;
//     }
// }

// const halley = new Dog('Halley');
// console.log(halley.name); // Print name value to console
// console.log(halley.behavior); // Print behavior value to console
// halley.incrementBehavior(); // Add one to behavior
// console.log(halley.name); // Print name value to console
// console.log(halley.behavior); // Print behavior value to console

// >>>> 2/12
// class Dog {
//     constructor(name) {
//         this.name = name;
//         this.behavior = 0;
//     }
// }

// class Surgeon {
//     constructor(name, department) {
//         this.name = name;
//         this.department = department;
//     }
// }

// >>>> 3/12
class Dog {
    constructor(name) {
        this.name = name;
        this.behavior = 0;
    }
}

const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'

class Surgeon {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// >>>> 4/12