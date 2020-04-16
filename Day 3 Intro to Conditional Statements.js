/*Day 3: Intro to Conditional Statements
https://www.hackerrank.com/challenges/30-conditional-statements/problem*/
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine());
    if (N%2 != 0 || (N > 5 && N < 21))
        console.log("Weird");
    else
        console.log("Not Weird");
}
