// includes name ekta jinish ase ja String er mddhe jodi kono ekta item thake true bolbe 
// na thakle false bolbe :::::


// 1.inclues



const lyrics = 'Tumi bondhu kala pakhi ami jeno ki'

const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase()
const searchStringToLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchString);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase())

// console.log(doesExist);



///////-----------------------------------/////
// -1 mane nai
// != - 1 mane ase

// indexOf :
// const lyrics = 'Tumi bondhu kala pakhi ami jeno ki'
console.log(lyrics.indexOf('Tumi'));
console.log(lyrics.indexOf('bondhu'));

if (lyrics.indexOf('Tumi') !== -1) {
    console.log('exists side the string');
}
else {
    console.log('can not find it');
}

//startswith :
console.log(lyrics.startsWith('tumi'));


// endswith :
const fileName = 'my.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('pdf');



