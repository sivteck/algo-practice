//https://www.hackerrank.com/challenges/two-arrays/problem
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

// Complete the twoArrays function below.
function twoArrays(k, A, B) {
    var flag = 0;
    function qSort(inpA) {
        if (!inpA.length) return [];
        const [head, ...tail] = inpA;
        const left = tail.filter(e => e < head);
        const right = tail.filter(e => e >= head);

        return qSort(left).concat(head, qSort(right));

    }
    var As = qSort(A);
    var Bs = qSort(B);

    
    for (var i = 0; i < As.length; i++) {
        if ((As[i] + Bs[As.length - 1 - i]) >= k) {
            
        } else flag = 1;
    }
    console.log(As);
    console.log(A);
    console.log(Bs);
    console.log(B);

    if (flag == 1) {
        return "NO";
    } else return "YES";

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        const A = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));

        const B = readLine().split(' ').map(BTemp => parseInt(BTemp, 10));

        let result = twoArrays(k, A, B);

        ws.write(result + "\n");
    }

    ws.end();
}
