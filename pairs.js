//https://www.hackerrank.com/challenges/pairs/problem
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

// Complete the pairs function below.
function pairs(k, arr) {
    function qSortF(arri) {
        if (!arri.length) return [];

        const [head, ...tail] = arri;
        const left = tail.filter(e => e < head);
        const right = tail.filter(e => e > head);

        return qSortF(left).concat(head,qSortF(right));
    }

    arr = qSortF(arr);

    var p1 = 0;
    var p2 = 1;
    var count = 0;
    while (p2 < arr.length) {
        var diff = arr[p2] - arr[p1];
        if (diff == k) {
            count++;
            p2++;
        } else if (diff > k) {
            p1++;
        } else if (diff < k) {
            p2++;
        }
    }

    return count;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = pairs(k, arr);

    ws.write(result + "\n");

    ws.end();
}
