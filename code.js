// KYLE IF U ARE READING THIS A CLARA LOVES YOU AND IM SO GLAD U ARE MY INSTRUCTOR

const perf = require('execution-time')();

// Add To Zero

let array = [1, 4, 11, 2, 37, -4]

function doesItAddToZero(array) {
    let addZero = false
for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
        if(i !== j){
            if(array[i] + array[j] === 0){
                addZero = true
            }
        }
    }
} console.log(addZero)
}


// Timer
perf.start();                     // Starts timer
doesItAddToZero(array);
let results1 = perf.stop();

console.log(results1)

// this took 9.58 ms

// Has Unique Chars

function hasUniqueChars (str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j] && i !== j) {
            return false
            }
        }
     }
     return true
 }


perf.start();                     // Starts timer
hasUniqueChars('Clara');
let results2 = perf.stop();

console.log(results2)

//this code took 61 μs

// Is Pangram

function checkPangram(str){
    mark = new Array(26).fill(false);
    let index;
    for (let i = 0; i < str.length; i++) {
        if ('A' <= str[i] && str[i] <= 'Z')
        index = str.charCodeAt(i) - 'A'.charCodeAt(0);
        else if ('a' <= str[i] && str[i] <= 'z')
             index = str.charCodeAt(i) - 'a'.charCodeAt(0);
        else continue;
 
        mark[index] = true;
    }
    for (let i = 0; i <= 25; i++)
        if (mark[i] == false)
            return false;
    
    return true;
}

let str = "The quick brown fox jumps over the lazy dog";
 
perf.start();                     // Starts timer
checkPangram(str);
let results3 = perf.stop();

console.log(results3)

//this code took 187.415 μs



// Longest Word

let arr = ['hi', 'dinosaur', 'supercalifragilisticexpialidocious']

function longestStringForLoop(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

perf.start();                     // Starts timer
longestStringForLoop(arr);
let results4 = perf.stop();

console.log(results4)

//this code took 88 μs