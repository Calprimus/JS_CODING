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

// let Airplane = {};

// // export default Airplane;

// Airplane.availableAirplanes = [{
//         name: 'AeroJet',
//         fuelCapacity: 800
//     },
//     {
//         name: 'SkyJet',
//         fuelCapacity: 500
//     }
// ];


// >>>> 6/15
// function displayFuelCapacity() {
//     Airplane.availableAirplanes.forEach(function(element) {
//         console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity)
//     });

// };

// displayFuelCapacity();

// >>>> 7/15
// let specialty = '';
// function isVegetarian() {
// }; 
// function isLowSodium() {
// }; 

// export { specialty, isVegetarian };

// let availableAirplanes = [{
//         name: 'AeroJet',
//         fuelCapacity: 800,
//         availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
//     },
//     {
//         name: 'SkyJet',
//         fuelCapacity: 500,
//         availableStaff: ['pilots', 'flightAttendants']
//     }
// ];

// let flightRequirements = {
//     requiredStaff: 4,
// };

// function meetsStaffRequirements(availableStaff, requiredStaff) {
//     if (availableStaff.length >= requiredStaff) {
//         return true;
//     } else {
//         return false;
//     }
// };

// export { availableAirplanes, flightRequirements, meetsStaffRequirements };

// >>>> 8/15
// import { specialty, isVegetarian } from './menu';

// console.log(specialty);

// import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

// function displayFuelCapacity() {
//     availableAirplanes.forEach(function(element) {
//         console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
//     });
// }

// displayFuelCapacity();

// function displayStaffStatus() {
//     availableAirplanes.forEach(function(element) {
//         console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
//     });

// };

// displayStaffStatus();

// >>>> 9/15
// export let availableAirplanes = [{
//         name: 'AeroJet',
//         fuelCapacity: 800,
//         maxSpeed: 1200,
//         minSpeed: 300,
//         availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
//     },
//     {
//         name: 'SkyJet',
//         fuelCapacity: 500,
//         maxSpeed: 800,
//         minSpeed: 200,
//         availableStaff: ['pilots', 'flightAttendants']
//     }
// ];

// export let flightRequirements = {
//     requiredStaff: 4,
//     requiredSpeedRange: 700
// };

// export function meetsStaffRequirements(availableStaff, requiredStaff) {
//     if (availableStaff.length >= requiredStaff) {
//         return true;
//     } else {
//         return false;
//     }
// };

// export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
//     let range = maxSpeed - minSpeed;
//     if (range > requiredSpeedRange) {
//         return true;
//     } else {
//         return false
//     }
// };

// >>>>10/15
// import { availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';

// function displayFuelCapacity() {
//     availableAirplanes.forEach(function(element) {
//         console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
//     });
// };
// displayFuelCapacity();

// function displayStaffStatus() {
//     availableAirplanes.forEach(function(element) {
//         console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
//     });
// };
// displayStaffStatus();

// function displaySpeedRangeStatus() {
//     availableAirplanes.forEach(function(element) {
//         console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
//     });
// };
// displaySpeedRangeStatus()

// >>>> 11/15
// ---------> airplane.js file
// let availableAirplanes = [{
//         name: 'AeroJet',
//         fuelCapacity: 800,
//         maxSpeed: 1200,
//         minSpeed: 300,
//         availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
//     },
//     {
//         name: 'SkyJet',
//         fuelCapacity: 500,
//         maxSpeed: 800,
//         minSpeed: 200,
//         availableStaff: ['pilots', 'flightAttendants']
//     }
// ];

// let flightRequirements = {
//     requiredStaff: 4,
//     requiredSpeedRange: 700
// };

// function meetsStaffRequirements(availableStaff, requiredStaff) {
//     if (availableStaff.length >= requiredStaff) {
//         return true;
//     } else {
//         return false;
//     }
// };

// function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
//     let range = maxSpeed - minSpeed;
//     if (range > requiredSpeedRange) {
//         return true;
//     } else {
//         return false
//     }
// };

// export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };

// >>>>12/15
// import { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs } from './airplane';

// function displayFuelCapacity() {
//     aircrafts.forEach(function(element) {
//         console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
//     });
// };
// displayFuelCapacity();

// function displayStaffStatus() {
//     aircrafts.forEach(function(element) {
//         console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff));
//     });
// };
// displayStaffStatus();

// function displaySpeedRangeStatus() {
//     aircrafts.forEach(function(element) {
//         console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReq.requiredSpeedRange));
//     });
// };
// displaySpeedRangeStatus()

// >>>> 13/15