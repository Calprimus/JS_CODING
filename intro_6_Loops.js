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

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';

while (currentCard !== 'Spade') {
    console.log(currentCard)
    currentCard = cards[Math.floor(Math.random() * 4)];

}

console.log('found a ' + currentCard);

// >>>> 7/8