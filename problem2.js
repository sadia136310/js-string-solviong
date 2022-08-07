// function minNumber(jim, dela, chinku) {
//     if (jim < dela && jim < chinku) {
//        return('jim will get the cake');
//     }
//     else if (dela < jim && dela < chinku) {
//         return('dela will get the cake');
//     }
//     else {
//         return('chinku will get the cake');
//     }
// }
// const minNumberIs = minNumber(84, 97, 55);
// console.log(minNumberIs);



// another one :::

function minNumber(num1, num2, num3) {
    const min = Math.min(num1, num2, num3);
    return min;
}
const minNumberIs = minNumber(84, 97, 55);
console.log(minNumberIs);