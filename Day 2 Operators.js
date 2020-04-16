/*Day 2: Operators
https://www.hackerrank.com/challenges/30-operators/problem*/
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

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    var meal_cost;
    var tip_percent;
    var tax_percent;
    var tip_cost = meal_cost * tip_percent / 100;
    var tax_cost = meal_cost * tax_percent /100;
    var total_cost = Math.round(meal_cost + tip_cost + tax_cost);
    console.log(total_cost);


}

function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
