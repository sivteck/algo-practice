//https://www.hackerrank.com/challenges/encryption/problem
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

// Complete the encryption function below.
function encryption(s) {
    var rowC = Math.floor(Math.sqrt(s.length));
    var columns = Math.ceil(Math.sqrt(s.length));
    var result = '';
    var count = 0;
    console.log(rowC);
    console.log(columns);

    for (var j = 0; j <= rowC; j++) {
        for (var i = j; i < s.length && count < columns; i = i + columns) {

            result = result + s[i];
            /*count++;
            if (count % rowC == 0 || i+columns > s.length) {
                result = result + ' ';
            }
            console.log(result);
            console.log(i); */

        }
        result = result + ' ';
        count++;
        console.log(result);
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
