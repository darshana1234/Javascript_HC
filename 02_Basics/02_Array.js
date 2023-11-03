const   heroes=["darshana","bruno","coco"]
const marvel=["choclate","icecream","cake"]

const all_heroes= heroes.concat(marvel)
console.log(all_heroes);

const all_new_heroes = [...heroes,...marvel]
console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,9,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"}))  //Interview questions

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
