// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area(আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

function measureOfArea(w, h) {
    const area = h * w;
    return area;
}
const areaIs = measureOfArea(5, 7);
console.log(areaIs);