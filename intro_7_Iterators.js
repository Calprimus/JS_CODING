// >>>> 1/7 ----->> .forEach() <<---------
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

// >>>> 2/7----->> .forEach() <<---------
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

// >>>> 3/7----->> .map() <<---------
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

// >>>> 4/7----->> .filter() <<---------
// let words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

// let shortWords = words.filter(function(word) {
//   return word.length < 6;
// });

// let shortWords = words.filter(word => word.length < 6);

// let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// // Call .filter() on randomNumbers below

// let smallNumbers = randomNumbers.filter(function(number) {
//     return number < 250;
// })


// let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

// >>>> 5/7----->> .some() <<---------

// var array = [1, 2, 3, 4, 5];

// var even = function(element) {
//   // checks whether an element is even
//   return element % 2 === 0;
// };

// console.log(array.some(even));
// // expected output: true

// let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// // Something is missing in the method call below

// console.log(words.some(function(word) {
//     return word.length < 6;
// }));

// // Use filter to create a new array

// let interestingWords = words.filter(function(word) {
//     return word.length > 5
// });



// // Make sure to uncomment the code below and fix the incorrect code before running it

// console.log(interestingWords.every(word => word.length > 5));

// >>>> 6/7
// let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

// let nums = [1, 50, 75, 200, 350, 525, 1000];

// //  Choose a method that will return undefined
// cities.forEach(city => console.log('Have you visited ' + city + '?'));

// // Choose a method that will return a new array
// let longCities = cities.filter(city => city.length > 7);

// // Choose a method that will return a new array
// let smallerNums = nums.map(num => num - 5);

// // Choose a method that will return a boolean value
// nums.some(num => num < 0);

// >>>> 7/7
// ITERATORS
// Review: Iterators
// You have learned a number of useful methods in this lesson as well as 
// how to use the JavaScript documentation from the Mozilla Developer Network 
// to discover and understand additional methods. Let's review!

// .forEach() is used to execute the same code 
// on every element in an array but does not change the array 
// and returns undefined.

// .map() executes the same code on every element in an array 
// and returns a new array with the updated elements.

// .filter() checks every element in an array 
// to see if it meets certain criteria and returns 
// a new array with the elements that return truthy for the criteria.

// All iterator methods can be written using arrow function syntax. 
// In fact, given the succinctness and the implicit return of arrow function syntax, 
// this is quickly becoming the preferred way to write these types of method calls.

// You can visit the Mozilla Developer Network to learn more about iterator methods 
// (and all other parts of JavaScript!).

// Additional iterator methods such as .some(), .every(), .reduce() 
// perform different functions.