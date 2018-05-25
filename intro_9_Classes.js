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
// class Dog {
//     constructor(name) {
//         this.name = name;
//         this.behavior = 0;
//     }
// }

// const halley = new Dog('Halley'); // Create new Dog instance
// console.log(halley.name); // Log the name value saved to halley
// // Output: 'Halley'

// class Surgeon {
//     constructor(name, department) {
//         this.name = name;
//         this.department = department;
//     }
// }

// const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
// const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// >>>> 4/12
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

// class Surgeon {
//     constructor(name, department) {
//         this._name = name;
//         this._department = department;
//         this._remainingVacationDays = 20;
//     }

//     get name() {
//         return this._name;
//     }

//     get department() {
//         return this._department;
//     }

//     get remainingVacationDays() {
//         return this._remainingVacationDays;
//     }

//     takeVacationDays(daysOff) {
//         return this._remainingVacationDays = this._remainingVacationDays - daysOff;
//     }
// }

// const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
// const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// >>>> 5/12
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

// let nikko = new Dog('Nikko'); // Create dog named Nikko
// nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
// let bradford = new Dog('Bradford'); // Create dog name Bradford
// console.log(nikko.behavior); // Logs 1 to the console
// console.log(bradford.behavior); // Logs 0 to the console

// class Surgeon {
//     constructor(name, department) {
//         this._name = name;
//         this._department = department;
//         this._remainingVacationDays = 20;
//     }

//     get name() {
//         return this._name;
//     }

//     get department() {
//         return this._department;
//     }

//     get remainingVacationDays() {
//         return this._remainingVacationDays;
//     }

//     takeVacationDays(daysOff) {
//         return this._remainingVacationDays = this._remainingVacationDays - daysOff;
//     }
// }

// const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
// const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// console.log(surgeonCurry.name)
// surgeonCurry.takeVacationDays(3)
// console.log(surgeonCurry.remainingVacationDays)

// >>>> 6/12
// ----------------------------------------------
class Cat {
    constructor(name, usesLitter) {
        this._name = name;
        this._usesLitter = usesLitter;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get usesLitter() {
        return this._usesLitter;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}
// -----------------------------------------------
class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}
//   -----------------------------------------------

// >>>> 7/12