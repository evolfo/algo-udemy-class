'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'numberOfPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY a as parameter.
 */

function numberOfPaths(a, x = 0, y = 0) {
    let currentValue = a[y][x]

    if (x === a[0].length -1 && y === a.length - 1) {
        return 1
    } 

    let right = 0
    let down = 0

    if (currentValue === 1) {
        if (x + 1 < a[0].length) {
            right = numberOfPaths(a, x+1, y)
        }
        if (y + 1 < a.length) {
            down = numberOfPaths(a, x, y+1)
        }
    }

    return right + down
}
