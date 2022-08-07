// const jim = 84;
// const dela = 99;
// const chinku = 77;
// if (jim > dela && jim > chinku
// ) {
//     console.log('jim will get the cake')
// }
// else if (dela > jim && dela > chinku) {
//     console.log('dela will get the cake');
// }
// else {
//     console.log('chinku will get the cake')
// }

// write a function that take 3 numbers will return the max number 



// using if else:::

// function maxNumber(jim, dela, chinku) {
//     if (jim > dela && jim > chinku) {
//         console.log('jim will get the cake');
//     }
//     else if (dela > jim && dela > chinku) {
//         console.log('dela will get the cake');
//     }
//     else {
//         console.log('chinku will get the cake');
//     }
// }
// const maxNumberIs = maxNumber(84, 97, 55);
// console.log(maxNumberIs);


// function maxNumber(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return ('num2 is the largest num');
//     }
//     if (num2 > num3 && num2 > num3) {
//         return ('num2 is the largest num');
//     }
//     else {
//         return ('num3 is the largest num');
//     }

// }
// const maxNumberIs = maxNumber(84, 97, 55);
// console.log(maxNumberIs);





// another one :::
function maxNumber(num1, num2, num3) {
    const max = Math.max(num1, num2, num3);

    return max;
}

const maxNumberIs = maxNumber(84, 97, 55);
console.log(maxNumberIs);