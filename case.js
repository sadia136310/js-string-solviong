// string = sequence of character

// immeutable =unable to change 

const userName = 'blackPink';
const userInput = 'blackPink';
console.log(userName
    .toLowerCase());
console.log(userName
    .toUpperCase());
console.log(userName
    .toLocaleLowerCase()); //location er opr depend korbe

if (userName.toLowerCase() === userInput.toLowerCase()) {
    console.log('valid user');
}
else {
    console.log('invalid user');
}