//https://www.hackerrank.com/challenges/closest-numbers/problem

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

// Complete the closestNumbers function below.
function closestNumbers(arr) {
    function qSort(inpA) {
        if (!inpA.length) return [];
        const [head, ...tail] = inpA;
        const left = tail.filter(e => e < head);
        const right = tail.filter(e => e > head);

        return qSort(left).concat(head, qSort(right));

    }

    var arrS = qSort(arr);
    var minDiff = arrS[1] - arrS[0];
    var res = [];
    res.push(arrS[0]);
    res.push(arrS[1]);
    for (var i = 0; i < arrS.length-1; i++){
        var diff = arrS[i + 1] - arrS[i];
        if (diff < minDiff) {
            res = [];
            res.push(arrS[i]);
            res.push(arrS[i + 1]);
            minDiff = diff;
        } else if (diff == minDiff) {
            res.push(arrS[i]);
            res.push(arrS[i + 1]);
        }
    }

    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = closestNumbers(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}

