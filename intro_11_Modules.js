// >>>> 1/15
// JavaScript modules are reusable pieces of code 
// that can be exported from one program and imported for use in another program.

// Modules are particularly useful for a number of reasons. 
// By separating code with similar logic into files called modules, we can:

//     - find, fix, and debug code more easily;
//     - reuse and recycle defined logic in different parts of our application;
//     - keep information private and protected from other modules;
//     - and, importantly, prevent pollution of the global namespace 
//       and potential naming collisions, by cautiously selecting variables and behavior 
//       we load into a program.

// >>>> 2/15
// ------------>In menu.js we write:

// let Menu = {};
// Menu.specialty = "Roasted Beet Burger with Mint Sauce";

// module.exports = Menu;
// // ------------>
// // The pattern we use to export modules is thus:

// // 1. Define an object to represent the module.
// // 2. Add data or behavior to the module.
// // 3. Export the module.

// // --------> In 1-airplane.js
// let Airplane = {};
// Airplane.myAirplane = "StarJet";
// module.exports = Airplane;

// >>>> 3/15
// ------->In order.js we would write:

// const Menu = require('./menu.js');

// function placeOrder() {
//     console.log('My order is: ' + Menu.specialty);
// }

// placeOrder();

// the pattern to import a module is:

// 1. Import the module
// 2. Use the module and its properties within a program.

// const Airplane = require('./1-airplane.js');

// function displayAirplane() {
//     console.log(Airplane.myAirplane);
// }

// displayAirplane();

// >>>> 4/15
// ----------->  2-airplane.js 
// const Airplane = {};

// module.exports = {
//     myAirplane: "CloudJet",
//     displayAirplane: function() {
//         return this.myAirplane;
//     }
// };
// // ----------ES6 Module-------------
// // export const myAirplane = "CloudJet";
// // export function displayAirplane() {
// //     return this.myAirplane;
// // }
// // ---------------------------------

// // ----------->2-missionControl.js
// import Airplane from "./2-airplane.js";

// console.log(Airplane.displayAirplane());

// //>>>> 5/15
// // ------------>export default<--------------
// let Menu = {};

// export default Menu;

let Airplane = {};

// export default Airplane;

Airplane.availableAirplanes = [{
        name: 'AeroJet',
        fuelCapacity: 800
    },
    {
        name: 'SkyJet',
        fuelCapacity: 500
    }
];


// >>>> 6/15
function displayFuelCapacity() {
    Airplane.availableAirplanes.forEach(function(element) {
        console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity)
    });

};

displayFuelCapacity();