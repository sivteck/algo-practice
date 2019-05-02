//https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem

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

// Complete the isValid function below.
function isValid(s) {
    var dict = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        var ind = s[i].charCodeAt() - 'a'.charCodeAt();
        dict[ind]++;
    }
    console.log(dict);
    var t1 = -1;
    var t2 = -1;
    var ones = 0;
    var count = 0;

    for (var j = 0; j < 26; j++) {
        console.log(t2);
        if (count > 1 && t2 != 1) {
            return "NO"
        }
        if (dict[j] == 0) {
            continue;
        }
        if (t1 == -1) {
            t1 = dict[j];
        } else if(t1 != dict[j]){
            t2 = dict[j];
            count += Math.abs(t1 - t2);
        }

    }
    if (count <= 1) {
        return "YES";
    } else if (t2 == 1 && count <= 1) {
        return "YES";
    } else return "NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}

