BROWSER COMPATIBILITY AND TRANSPILATION
# npm init
In the last exercise, you wrote one command in your terminal to transpile ES6 code to ES5. In the next five exercises you will learn how to setup a JavaScript project that transpiles code when you run npm run build from the root directory of a JavaScript project.

The first step is to place your ES6 JavaScript file in a directory called src. From your root directory, the path to the ES6 file is ./src/main.js

The initial JavaScript project file structure is:

project
|_ src
|___ main.js

Before we install Babel, we need to setup our project to use the node package manager (npm). Developers use npm to access and manage Node packages. Node packages are directories that contain JavaScript code written by other developers. You can use these packages to reduce duplication of work and avoid bugs.

Before we can add Babel to our project directory, we need to run npm init. The npm init command creates a package.json file in the root directory.

A package.json file contains information about the current JavaScript project. Some of this information includes:

- Metadata — This includes a project title, description, authors, and more.

- A list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.

- Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.

If you have Node installed on your computer, you can create a package.json file by typing npm init into the terminal.

The terminal prompts you to fill in fields for the project's metadata (name, description, etc.)

You are not required to answer the prompts, though we recommend at minimum, you add your own title and description. If you don't want to fill in a field, you can press enter. npm will leave fill these fields with default values or leave them empty when it creates the package.json file.

After you run npm init your directory structure will contain the following files and folders:

project
|_ src
|___ main.js
|_ package.json
npm adds the package.json file to the same level as the src directory. 

BROWSER COMPATIBILITY AND TRANSPILATION
Install Node Packages
We use the npm install command to install new Node packages locally. The install command creates a folder called node_modules and copies the package files to it. The install command also installs all of the dependencies for the given package.

To install Babel, we need to npm install two packages, babel-cli and babel-preset-env. However, npm installs over one hundred other packages that are dependencies for Babel to run properly.

We install Babel with the following two commands:

$ npm install babel-cli -D
$ npm install babel-preset-env -D
The babel-cli package includes command line Babel tools, and the babel-preset-env package has the code that maps any JavaScript feature, ES6 and above (ES6+), to ES5.

The -D flag instructs npm to add each package to a property called devDependencies in package.json. Once the project's dependencies are listed in devDependencies, other developers can run your project without installing each package separately. Instead, they can simply run npm install — it instructs npm to look inside package.json and download all of the packages listed in devDependencies.

Once you npm install packages, you can find the Babel packages and all their dependencies in the node_modules folder. The new directory structure contains the following:

project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ package.json
The ... in the file structure above is a placeholder for 100+ packages that npm installed.

BROWSER COMPATIBILITY AND TRANSPILATION
.babelrc
Now that you've downloaded the Babel packages, you need to specify the version of the source JavaScript code.

You can specify the initial JavaScript version inside of a file named .babelrc. In your root directory, you can run touch .babelrc to create this file.

Your project directory contains the following folders and files:

project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json
Inside .babelrc you need to define the preset for your source JavaScript file. The preset specifies the version of your initial JavaScript file.

Usually, you want to transpile JavaScript code from versions ES6 and later (ES6+) to ES5. From this point on, we will refer to our source code as ES6+, because Ecma introduces new syntax with each new version of JavaScript.

To specify that we are transpiling code from an ES6+ source, we have to add the following JavaScript object into .babelrc:

{
  "presets": ["env"]
}
When you run Babel, it looks in .babelrc to determine the version of the initial JavaScript file. In this case, ["env"] instructs Babel to transpile any code from versions ES6 and later.

BROWSER COMPATIBILITY AND TRANSPILATION
Babel Source Lib
There's one last step before we can transpile our code. We need to specify a script in package.json that initiates the ES6+ to ES5 transpilation.

Inside of the package.json file, there is a property named "scripts" that holds an object for specifying command line shortcuts. It looks like this:

...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}, ...
In the code above, the "scripts" property contains an object with one property called "test". Below the "test" property, we will add a script that runs Babel like this:

...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}
In the "scripts" object above, we add a property called "build". The property's value, "babel src -d lib", is a command line method that transpiles ES6+ code to ES5. Let's consider each argument in the method call:

- babel — The Babel command call responsible for transpiling code.
- src — Instructs Babel to transpile all JavaScript code inside the src directory.
- -d — Instructs Babel to write the transpiled code to a directory.
- lib — Babel writes the transpiled code to a directory called lib.

In the next exercise, we'll run the babel src -d lib method to transpile our ES6+ code.
