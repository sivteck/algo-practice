//https://www.hackerrank.com/challenges/find-the-median/problem
//http://blog.teamleadnet.com/2012/07/quick-select-algorithm-find-kth-element.html
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

// Complete the findMedian function below.
function findMedian(arr) {
    var start = 0;
    var end = arr.length-1;
    var middle = Math.floor(arr.length / 2);
    while (start < end) {
        var s = start;
        var d = end;
        var pivot = arr[Math.floor((s + d) / 2)];

        while (s < d) {
            if (arr[s] >= pivot) {
                var tmp = arr[d];
                arr[d] = arr[s];
                arr[s] = tmp;
                d--;
            } else {
                s++;
            }
        } 
        if (arr[s] > pivot) {
            s--;
        }

        if (middle <= s) {
            end = s;
        }
        else {
            start = s + 1;
        }
    }
    console.log(arr);
    return arr[middle];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = findMedian(arr);

    ws.write(result + "\n");

    ws.end();
}

