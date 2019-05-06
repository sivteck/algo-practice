//https://www.hackerrank.com/challenges/kaprekar-numbers/problem?h_r=profile
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
    function calcD(inp) {
        var d = 0;
        while (inp > 0) {
            inp = Math.floor(inp / 10);
            d++;
        }
        return d;
    }
    function splitNumberAndAdd(inum) {
        var arrN = [];
        var rightS = '';
        var leftS = '';
        var d = calcD(inum);
        var num = Math.pow(inum, 2);
        while (num > 0) {
            if (rightS.length < d) {
                rightS = String(num % 10) + rightS;
                num = Math.floor(num / 10);
            } else {
                leftS = String(num % 10) + leftS;
                num = Math.floor(num / 10);
            }
        }
        if (leftS == '') {
            leftS = 0;
        }
        return parseInt(leftS) + parseInt(rightS);
    }
    var res = [];
    for (var i = p; i <= q; i++) {
        if (i == splitNumberAndAdd(i)) {
            res.push(i);
        }
    }
    if (res.length > 0) {
        console.log(res.join(' '));
    } else {
        console.log("INVALID RANGE");
    }
    

}

function main() {
    const p = parseInt(readLine(), 10);

    const q = parseInt(readLine(), 10);

    kaprekarNumbers(p, q);
}
