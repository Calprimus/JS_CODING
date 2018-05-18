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

var orderCount = 0

const takeOrder = (topping, crustType) => {
    orderCount++
    console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

const getSubTotal = (itemCount) => {
    return itemCount * 7.5
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

console.log(getSubTotal(orderCount))

// >>>> 6/10