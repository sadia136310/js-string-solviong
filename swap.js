let first = 7;
let second = 5;
console.log(first, second);

// approach1 :
const temp = first;
first = second;
second = temp;

// approach 2 :
[first, second] = [second, first]
console.log(first, second);