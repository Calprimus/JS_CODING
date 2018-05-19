// >>>> 2/7
// const color = 'blue'

// const colorOfSky = () => {
//     return color; // blue 
// };

// console.log(colorOfSky()); // blue

// const satellite = 'The Moon'
// const galaxy = 'The Milky Way'

// let stars = 'North Star'

// const myNightSky = () => {
//     return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
// }

// console.log(myNightSky())

// >>>> 3/7
// const satellite = 'The Moon'
// const galaxy = 'The Milky Way'

// let stars = 'North Star'

// const myNightSky = () => {
//     stars = 'Sirius';
//     return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
// }

// console.log(myNightSky())
// console.log(stars)

// >>>> 4/7
// const visibleLightWaves = () => {
//     let lightWaves = 'Moonlight'
//     console.log(lightWaves)
// }

// visibleLightWaves()
// console.log(lightWaves)

// >>>> 5/7
// const colorOfSky = () => {
//     const dusk = true;
//     let color = 'blue';
//     if (dusk) {
//         let color = 'pink';
//         console.log(color); // pink
//     }
//     console.log(color); // blue 
// };

// colorOfSky(); // blue
// console.log(color); // ReferenceError

// const visibleLightWaves = () => {
//     let lightWaves = 'Moonlight'
//     let region = 'The Arctic'
//     if (region === 'The Arctic') {
//         let lightWaves = 'Northern Lights'
//         console.log(lightWaves)
//     }
//     console.log(lightWaves)
// }

// visibleLightWaves()

// >>>> 6/7
// const cloudCount = () => {
//     let i = 2;
//     console.log(i); // 2
//     for (let i = 0; i < 10; i++) {
//         console.log(i); // Numbers from 0 to 9
//     }
// };

// cloudCount();
// console.log(i); // ReferenceError
// // ----------------------------------------------------------------
// const starCount = () => {
//     let i = 5
//     console.log(i)
//     for (i=0; i<12; i++){
//       console.log(i)
//     }
//   }

//   starCount()
//   console.log(i)
// //   -------------------------------------------------------------

// >>>> 7/7
// Review: Scope
// This unit introduced you to scope.

// Scope is the idea in programming that some variables are 
// accessible/inaccessible from other parts of the program.

// Global Scope refers to variables that are accessible to every 
// part of the program.

// Block Scope refers to variables that are accessible only within 
// the block they are defined.