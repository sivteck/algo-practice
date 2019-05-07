//https://www.hackerrank.com/challenges/fair-rations/problem

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

// Complete the fairRations function below.
function fairRations(B) {
    var sum = 0;
    for (var i = 0; i < B.length; i++){
        sum += B[i];
    }

    if (sum % 2 == 1) {
        return "NO";
    } 
    var totLoaves = 0;
    for (var i = 0; i < B.length-1; i++){
        if (B[i] % 2 == 1) {
            B[i] += 1;
            B[i + 1] += 1;
            totLoaves += 2;
        }
    }

    return totLoaves;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const N = parseInt(readLine(), 10);

    const B = readLine().split(' ').map(BTemp => parseInt(BTemp, 10));

    let result = fairRations(B);

    ws.write(result + "\n");

    ws.end();
}
