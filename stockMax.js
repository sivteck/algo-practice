//https://www.hackerrank.com/challenges/stockmax/problem
'use strict';

const fs = require('fs');

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

// Complete the stockmax function below.
function stockmax(prices) {
    var maxProf = 0;
    var profit = 0;
    for (var i = prices.length - 1; i >= 0; i--) {
        if (prices[i] >= maxProf) {
            maxProf = prices[i];
            
        }
        profit += maxProf - prices[i];
    }
    return profit;

} 

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const prices = readLine().split(' ').map(pricesTemp => parseInt(pricesTemp, 10));

        let result = stockmax(prices);

        ws.write(result + "\n");
    }

    ws.end();
}
