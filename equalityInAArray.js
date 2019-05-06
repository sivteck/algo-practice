//https://www.hackerrank.com/challenges/equality-in-a-array/problem?h_r=profile
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

// Complete the equalizeArray function below.
function equalizeArray(arr) {
    var arrm = new Array(101).fill(0);
    var max = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        arrm[arr[i]]++;
        sum++;
        if (arrm[arr[i]] > max) {
            max = arrm[arr[i]];
        }
    }

    return sum - max;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = equalizeArray(arr);

    ws.write(result + "\n");

    ws.end();
}

