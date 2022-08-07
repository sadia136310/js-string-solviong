// write a function to get the smallest number in a array..

function smallestNumberOfArray(numbers) {
    let smallest = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (smallest > element)
            smallest = element



    }
    return smallest;

}
const heights = [167, 190, 120, 70, 132, 165, 312];
const smallest = smallestNumberOfArray(heights);
console.log('smallest person is ', smallest)

