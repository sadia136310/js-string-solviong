// ৫.(ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।


function secondMaxArray(numbers) {
    let largest = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index - 1];
        if (element > largest) {
            largest = element;
        }

    }
    return largest;
}
const numbers = [167, 190, 120, 165, 137, 400, 450];

const secondNum = secondMaxArray(numbers);
console.log('second large number is ', secondNum);