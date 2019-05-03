//https://www.hackerrank.com/challenges/missing-numbers/problem

'use strict';

const fs = require('fs');

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

// Complete the missingNumbers function below.
function missingNumbers(arr, brr) {
    /*var max = arr[0];
    var min = arr[0];
    var bigLength = arr.length;
    if (arr.length < brr.length) {
        bigLength = brr.length;
    }
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min && i < arr.length) min = arr[i];
        if (arr[i] > max && i < arr.length) max = arr[i];

        if (brr[i] < min && i< brr.length) min = brr[i];
        if (arr[i] > max && i < brr.length) max = brr[i];
    }
    var lenDict = max - min;


    var dictA = new Array(lenDict+1).fill(0);

    for (var i = 0; i < bigLength; i++) {
        if (i < arr.length) {
            var ind = arr[i] - min;
            dictA[ind] = dictA[ind] + 1;
        }
        if (i < brr.length) {
            var indB = brr[i] - min;
            console.log(dictA)
            dictA[indB] = dictA[indB] - 1;
        }
    } */
    /*for (var i = 0; i < brr.length; i++) {
        console.log(brr[i]);
        console.log("ind")
        var ind = brr[i] - min;
        dictA[ind] = dictA[ind] - 1;
        console.log(dictA)
    } */
    /*console.log(dictA);
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (dictA[i] > 0 || dictA[i] < 0) {
            res.push(min+i);
        }
    }

    console.log(res);
    return res; */

    var dictA = new Array(10001).fill(0);
    var bigLength = arr.length;
    if (arr.length < brr.length) {
        bigLength = brr.length;
    }

    for (var i = 0; i < bigLength; i++) {
        if (i < arr.length) {
            var ind = arr[i];
            dictA[ind] = dictA[ind] + 1;
        }
        if (i < brr.length) {
            var indB = brr[i];
            dictA[indB] = dictA[indB] - 1;
        }
    }
    var res = [];
    for (var i = 0; i < dictA.length; i++) {
        if (dictA[i] > 0 || dictA[i] < 0) {
            res.push(i);
        }
    }

    console.log(res);
    return res;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine(), 10);

    const brr = readLine().split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
