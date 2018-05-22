// >>>> 1/7
// let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

// artists.forEach(function(artist) {
//     console.log(artist + ' is one of my favorite artists.');
// });

// let numbers = [1, 2, 3, 4, 5];

// let squareNumbers = numbers.map(function(number) {
//     return number * number;
// });

// console.log(squareNumbers);

// let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

// let onlyNumbers = things.filter(function(thing) {
//     return typeof thing === 'number';
// });

// console.log(onlyNumbers);

// >>>> 2/7
// let groceries = ['whole wheat flour', 'brown sugar', 'salt', 'cranberries', 'walnuts'];

// groceries.forEach(function(groceryItem) {
//     console.log(' - ' + groceryItem);
// });

// groceries.forEach(groceryItem => console.log(' - ' + groceryItem));

// // -----------------------------------------------------------------------

// // There are three important things to know about the .forEach() method.

// // 1) It is an array method. It must be called upon an array.
// // 2) Any changes to the iterated array value won't be updated in the original array.
// // 3) The return value is undefined.

// // -----------------------------------------------------------------------

// let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// // Iterate over fruits below

// fruits.forEach(function(fruit) {
//     console.log('I want to eat a ' + fruit)
// });

// fruits.forEach(fruit => console.log('I want to eat a ' + fruit));

// >>>> 3/7
// let numbers = [1, 2, 3, 4, 5]; 

// let bigNumbers = numbers.map(function(number) {
//   return number * 10;
// });
// // ------------------------------------------------------
// let numbers = [1, 2, 3, 4, 5]; 

// let bigNumbers = numbers.map(numbers => numbers * 10);

// let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// // Create the secretMessage array below
// let secretMessage = animals.map(function(animals){
//   return animals[0];
// })

// console.log(secretMessage.join(''));

// let bigNumbers = [100, 200, 300, 400, 500];

// // Create the smallNumbers array below
// let smallNumbers = bigNumbers.map(function(bigNumbers){
//   return bigNumbers / 100;
// });

// // -------- Refactor the method call from Step 1 using arrow function syntax.
// let secretMessage = animals.map(animals => animals[0]);
// console.log(secretMessage.join(''));

// >>>> 4/7
// let words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

// let shortWords = words.filter(function(word) {
//   return word.length < 6;
// });

// let shortWords = words.filter(word => word.length < 6);

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

let smallNumbers = randomNumbers.filter(function(number) {
    return number < 250;
})


let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

// >>>> 5/7