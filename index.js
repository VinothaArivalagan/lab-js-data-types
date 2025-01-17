/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string


// Print out the concatenated string
console.log(`${s1} ${s2} ${s3} ${s4} ${s5}`);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings




// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


let part1Substring= part1.substring(0,part1.length-1);

let part1LastChar= part1.slice(part1.length-1);

part1LastChar= part1LastChar.toUpperCase();

const newPart1= part1Substring + part1LastChar;

let part2Substring= part2.substring(0,part2.length-1);

let part2LastChar= part2.slice(part2.length-1);

part2LastChar= part2LastChar.toUpperCase();

const newPart2= part2Substring + part2LastChar;

console.log(newPart1 + newPart2);

// Concatenate uppercased letter and the rest of the string

// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tip= 15;
let tipAmount = billTotal* (tip/100);
  console.log(tipAmount);

// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomNumber= Math.round(Math.random()*10);

console.log(randomNumber);
// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false


const expression2 = a || b; //true

const expression3 = !a && b; //false

const expression4 = !(a && b); //true

const expression5 = !a || !b; //true

const expression6 = !(a || b); //true

const expression7 = a && a; //true