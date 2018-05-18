// >>>> 1/10

// let calculatorIsOn = false;

// const pressPowerButton = () => {
//     if (calculatorIsOn) {
//         console.log('Calculator turning off.');
//         calculatorIsOn = false;
//     } else {
//         console.log('Calculator turning on.');
//         calculatorIsOn = true;
//     }
// };

// pressPowerButton();
// // Output: Calculator turning on.

// pressPowerButton();
// // Output: Calculator turning off.

// >>>> 2/10
// const takeOrder = () => {
//     console.log('Order: pizza')
// }

// takeOrder()

// >>>> 3/10
// const multiplyByThirteen = (inputNumber) => {
//     console.log(inputNumber * 13);
// };

// multiplyByThirteen(9);
// // Output: 117

// const takeOrder = (topping) => {
//     console.log('Order: pizza topped with ' + topping);
// };

// takeOrder("mushrooms");

// >>>> 4/10
// const getAverage = (numberOne, numberTwo) => {
//     const average = (numberOne + numberTwo) / 2;
//     console.log(average);
// };

// getAverage(365, 27);
// // Output: 196

// const takeOrder = (topping, crustType) => {
//     console.log('Order: ' + crustType + ' pizza topped with ' + topping);
// };


// takeOrder('mushrooms', 'thin');
// takeOrder('bacon', 'thick');
// takeOrder('mozzarella', 'medium');

// >>>> 5/10
// const getAverage = (numberOne, numberTwo) => {
//     const average = (numberOne + numberTwo) / 2;
//     return average;
//   }

//   console.log(getAverage(365, 27));
//   // Output: 196

// var orderCount = 0

// const takeOrder = (topping, crustType) => {
//     orderCount++
//     console.log('Order: ' + crustType + ' pizza topped with ' + topping);
// };

// const getSubTotal = (itemCount) => {
//     return itemCount * 7.5
// };

// takeOrder('mushroom', 'thin crust');
// takeOrder('spinach', 'whole wheat');
// takeOrder('pepperoni', 'brooklyn style');

// console.log(getSubTotal(orderCount))

// >>>> 6/10
// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
//   };

//   const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
//   };

//   console.log('The temperature is ' + getFahrenheit(15) + '°F');
//   // Output: The temperature is 59°F

// let orderCount = 0;

// const takeOrder = (topping, crustType) => {
//     orderCount++;
//     console.log('Order: ' + crustType + ' pizza topped with ' + topping);
// };

// takeOrder('mushroom', 'thin crust');
// takeOrder('spinach', 'whole wheat');
// takeOrder('pepperoni', 'brooklyn style');

// const getSubTotal = (itemCount) => {
//     return itemCount * 7.5;
// };

// const getTax = (itemCount) => {
//     return getSubTotal(itemCount) * 0.06
// }

// const getTotal = (itemCount) => {
//     return getSubTotal(itemCount) + getTax(itemCount)
// }

// console.log(getTotal(orderCount));

// >>>> 7/10
// function isGreaterThan(numberOne, numberTwo) {
//     if (numberOne > numberTwo) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isGreaterThan(5, 9))

// >>>> 8/10
// -------------------------------------------------------
// const square = function(number) {
//     return number * number;
// };

// console.log(square(5));
// // Output: 25.
// // -------------------------------------------------------
// const square = (number) => {
//     return number * number;
// };

// console.log(square(5));
// // Output: 25.
// // -------------------------------------------------------
// function isGreaterThan(numberOne, numberTwo) {
//     if (numberOne > numberTwo) {
//         return true;
//     } else {
//         return false;
//     }
// }

// isGreaterThan(4, 8)

const isGreaterThan = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) {
        return true;
    } else {
        return false;
    }
}

isGreaterThan(4, 8)

// >>>> 9/10