//https://www.hackerrank.com/challenges/the-love-letter-mystery/problem

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

// Complete the theLoveLetterMystery function below.
function theLoveLetterMystery(s) {

    var i = 0;
    var j = s.length - 1;
    var count = 0;
    while (i < j) {
        if (s[i] != s[j]) {
            count += Math.abs(s[i].charCodeAt() - s[j].charCodeAt());
        }
        i++;
        j--;
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = theLoveLetterMystery(s);

        ws.write(result + "\n");
    }

    ws.end();
}
