// https://www.hackerrank.com/challenges/sansa-and-xor/problem
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

// Complete the sansaXor function below.
function sansaXor(arr) {
    var res = 0;
    if (arr.length % 2 == 0) {
        return 0;
    } else {
        for (var i = 0; i < arr.length; i += 2){
            res = res ^ arr[i];
        }
    }

    return res;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        let result = sansaXor(arr);

        ws.write(result + "\n");
    }

    ws.end();
}
