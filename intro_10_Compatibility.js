// >>>> 1/11
// var pasta = "Spaghetti"; // ES5 syntax

// const meat = "Pancetta"; // ES6 syntax

// let sauce = "Eggs and cheese"; // ES6 syntax

// // Template literals, like the one below, were introduced in ES6
// const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

// >>>> 2/11
// nothing
// caniuse.com

// >>>> 3/11
// // Set the variable below to a number
// let esFivePercentageSupport = 97;

// // Set the variable below to a number
// let esSixTemplateLiterals = 88;

// >>>> 4/11
var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = 'You can make carbonara with' + pasta + meat + 'and a sauce made with' + sauce

// >>>> 5/11
// In the terminal window type:

// npm install babel-cli
// This installs one of the two required Babel packages.

// 2.
// In the terminal window type:

// npm install babel-preset-env
// This installs the second of two required Babel packages.

// 3.
// In the terminal, type:
//  npm run build and press enter.

// You can view the ES5 code in ./lib/main.js.

// You may need to refresh to see the newly created lib directory.

// >>>> 6/11 to 10/11 look at Babel MD file
// --------------------------------------------
// >>>> 11/11
// BROWSER COMPATIBILITY AND TRANSPILATION
// Review
// In this lesson, you learned about browser compatibility and transpilation.Let 's review the key concepts:

// >
// ES5— The old JavaScript version that is supported by all modern web browsers.

// >
// ES6— The new(er) JavaScript version that is not supported by all modern web browsers.
// The syntax is more readable, similar to other programming languages,
// and addresses the source of common bugs in ES5.

// >
// caniuse.com— a website you can use to look up HTML, CSS,
//     and JavaScript browser compatibility information.

// >
// Babel— A JavaScript package that transpiles JavaScript ES6 + code to ES5.

// >
// npm init— A terminal command that creates a package.json file.

// >
// package.json— A file that contains information about a JavaScript project.

// >
// npm install— A command that installs Node packages.

// >
// babel - cli— A Node package that contains command line tools
// for Babel.

// >
// babel - preset - env— A Node package that contains ES6 + to ES5 syntax mapping information.

// >
// .babelrc— A file that specifies the version of the JavaScript source code.

// >
// "build"
// script— A package.json script that you use to tranpsile ES6 + code to ES5.

// >
// npm run build— A command that runs the build script and transpiles ES6 + code to ES5.

// For future reference, here is a list of the steps needed to set up a project
// for transpilation:

//     1. Initialize your project using npm init and create a directory called src

// 2. Install babel dependencies by running
// npm install babel - cli - D
// npm install babel - preset - env - D

// 3. Create a.babelrc file inside your project and add the following code inside it: {
//     "presets": ["env"]
// }

// 4. Add the following script to your scripts object in package.json:
//     "build": "babel src -d lib"

// 5. Run npm run build whenever you want to transpile your code from your src to lib directories.