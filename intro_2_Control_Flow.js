// >>>> 1/11
// let userName = 'Fulvio';
// let knowsJavaScript = true;

// if (knowsJavaScript && userName) {
//     console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
// } else if (knowsJavaScript) {
//     console.log('Great! Get ready to practice your JavaScript!');
// } else if (userName) {
//     console.log('Great, ' + userName + '! Get ready to learn something new!');
// } else {
//     console.log('Great! Get ready to learn something new!');
// }

// >>>> 2/11
// let needsCoffee = true;
// if (needsCoffee === true) {
//     console.log('Finding coffee');
// } else {
//     console.log('Keep on keeping on!');
// }

// let isSoccerFan = true;
// if (isSoccerFan === true) {
//     console.log('Goal!');
// } else {
//     console.log('No goal!');
// }

// >>>> 3/11
// let wordCount = 10;

// if (wordCount) {
//     console.log("Great! You've started your work!");
// } else {
//     console.log('Better get to work!');
// }


// let favoritePhrase = 'Oh Dear';

// if (favoritePhrase) {
//     console.log("This string doesn't seem to be empty.");
// } else {
//     console.log('This string is definitely empty.');
// }

// >>>> 4/11
// let wordCount = 10;

// if (wordCount) {
//     console.log("Great! You've started your work!");
// } else {
//     console.log('Better get to work!');
// }


// let favoritePhrase = 'Oh Dear';

// if (!favoritePhrase) {
//     console.log("This string doesn't seem to be empty.");
// } else {
//     console.log('This string is definitely empty.');
// }   

// >>>> 5/11
// let hungerLevel = 5

// if (hungerLevel > 7) {
//     console.log("Time to eat!")
// } else {
//     console.log("We can eat later!")
// }

// >>>> 6/11
// var moonPhase = "full"

// if (moonPhase === "full") {
//     console.log("Howl!")
// } else {
//     console.log("I swear I am not a werewolf")
// }

// >>>> 7/11
// let stopLight = 'green';

// if (stopLight === 'red') {
//     console.log('Stop');
// } else if (stopLight === 'yellow') {
//     console.log('Slow down');
// } else if (stopLight === 'green') {
//     console.log('Go!');
// } else {
//     console.log('Caution, unknown!');
// }

// var moonPhase = "full"

// if (moonPhase === "full") {
//     console.log("Howl!")
// } else if (moonPhase === "mostly full") {
//     console.log("Arms and legs are getting hairier")
// } else if (moonPhase === "mostly new") {
//     console.log("Back on two feet")
// } else {
//     console.log("Invalid moon phase")
// }

// >>>> 8/11
// if (stopLight === 'green' && pedestrians === false) {
//     console.log('Go!');
//   } else {
//     console.log('Stop');
//   }

// var moonPhase = "full"
// var isFoggyNight = true

// if (moonPhase === "full" && isFoggyNight === true) {
//     console.log("Howl!")
// } else if (moonPhase === "mostly full") {
//     console.log("Arms and legs are getting hairier")
// } else if (moonPhase === "mostly new") {
//     console.log("Back on two feet")
// } else {
//     console.log("Invalid moon phase")
// }

// >>>> 9/11
// let groceryItem = 'papaya';

// switch (groceryItem) {
//     case 'tomato':
//         console.log('Tomatoes are $0.49');
//         break;
//     case 'lime':
//         console.log('Limes are $1.49');
//         break;
//     case 'papaya':
//         console.log('Papayas are $1.29');
//         break;
//     default:
//         console.log('Invalid item');
//         break;
// }

// var moonPhase = "full"

// switch (moonPhase) {
//     case 'full':
//         console.log('Howl!');
//         break;

//     case 'mostly full':
//         console.log('Arms and legs are getting hairier');
//         break;

//     case 'mostly new':
//         console.log('Back on two feet');
//         break;

//     default:
//         console.log('Invalid moon Phase');
//         break;
// }

// >>>> 10/11
// // -----------------------------------------------------------------------------------
// let isNightTime = true;

// if (isNightTime) {
//     console.log('Turn on the lights!');
// } else {
//     console.log('Turn off the lights!');
// }

// isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
// // --------------------------------------------------------------------------------------
// age >= 16 ? console.log('You are old enough to drive in the United States!') : console.log('You are not old enough to drive in the United States!');
// // --------------------------------------------------------------------------------------

let isLocked = false;

if (isLocked) {
    console.log('You will need a key to open the door.');
} else {
    console.log('You will not need a key to open the door.');
}

isLocked ? console.log('You will need a key to open the door.') :
    console.log('You will not need a key to open the door.');



let isCorrect = true;

if (isCorrect) {
    console.log('Correct!');
} else {
    console.log('Incorrect!');
}

isCorrect ? console.log('Correct!') : console.log('Incorrect!');



let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
    console.log('I love that!');
} else {
    console.log("I don't love that!");
}

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// >>>> 11/11

// Review: Control Flow
// Way to go! We just learned a lot of control flow concepts:

// if/else statements make binary decisions and execute different code based on conditions.
// All conditions are evaluated to be truthy or falsy.
// We can add more conditional statements to if/else statements with else if.
// switch statements make complicated if/else statements easier to read and achieve the same result.
// The ternary operator (?) and a colon (:) allow us to refactor simple if/else statements.
// Comparison operators, including <, >, <=, and >= can compare two variables or values.
// After two values are compared, the conditional statement evaluates to true or false.
// The logical operator && checks if both sides of a condition are truthy.
// The logical operator || checks if either side is truthy.
// The logical operator !== checks if the two sides are not equal.
// An exclamation mark (!) switches the truthiness / falsiness of the value of a variable.
// One equals symbol (=) is used to assign a value to a variable.
// Three equals symbols (===) are used to check if two variables are equal to each other.