// >>>> 1/8
// let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

// for (let i = 0; i < cookies.length; i++) {
//     console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
// }

// >>>> 2/8
// let vacationSpots = ['NYC', 'Napoli', 'Capri'];

// console.log(vacationSpots[0]);
// console.log(vacationSpots[1]);
// console.log(vacationSpots[2]);

// >>>> 3/8
// let vacationSpots = ['NYC', 'Napoli', 'Capri'];

// for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
//     console.log('I would love to visit ' + vacationSpots[vacationSpotIndex])
// }

// >>>> 4/8
// let vacationSpots = ['NYC', 'Napoli', 'Capri'];

// for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--) {

//     console.log('I would love to visit ' + vacationSpots[vacationSpotIndex])
// }

// >>>> 5/8
// for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < yourArray.length; j++) {
//         //Code To Run
//     }
// }

// let myPlaces = ['London', 'Paris', 'Rome'];
// let friendPlaces = ['SF', 'Paris', 'Vegas'];

// for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {

//     for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
//         if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) { console.log(myPlaces[myPlacesIndex]) }
//     }
// };

// >>>> 6/8
// while (condition) {
//     // Code block that loops until condition is false
//   }

// let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

// let currentCard = 'Heart';

// while (currentCard !== 'Spade') {
//     console.log(currentCard)
//     currentCard = cards[Math.floor(Math.random() * 4)];

// }

// console.log('found a ' + currentCard);

// >>>> 7/8
// let flag = true;
// let counter = 0;

// while (flag === true) {
//     console.log(counter);
//     counter += 1;
//     if (counter === 37) {
//         break;
//     }
// }

// >>>> 8/8
// LOOPS
// Review: Loops
// Great job! In this lesson, we learned how to write less repetitive code with loops.

// for loops allow us to repeat a block of code a known amount of times.

// We can use a for loop inside another for loop to compare two lists.

// while loops are for looping over a code block an unknown amount of times.

// Infinite loops occur when stop conditions are never met.

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);


groceryList.unshift('popcorn');
console.log(groceryList);



console.log(groceryList.slice(1, 4));