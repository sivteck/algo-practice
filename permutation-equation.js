//https://www.hackerrank.com/challenges/permutation-equation/problem
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

// Complete the permutationEquation function below.
function permutationEquation(p) {
    var ys = new Array(p.length).fill(0);
    for (var i = 0; i < p.length; i++){
        var y = p[i];
        var t1 = p[y - 1];
        var t2 = p[t1 - 1];
        ys[t2 - 1] = y;
    }
    return ys;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));

    let result = permutationEquation(p);

    ws.write(result.join("\n") + "\n");

    ws.end();
}

