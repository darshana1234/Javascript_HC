const name="darshana"
const repoCount=50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('darshanabi')
console.log(gameName[0]);
console.log(gameName._proto_);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt());
console.log(gameName.indexOf('b'));

const newString = gameName.substring(0,4);
console.log(newString);
const newString1= gameName.slice(2,5);

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))
console.log(gameName.split('-'));