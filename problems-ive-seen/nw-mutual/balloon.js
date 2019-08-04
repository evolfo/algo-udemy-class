// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, realCounter = 0) {
    const balloonObj = {B: 1, A: 1, L: 2, O: 2, N: 1}
    let counter = 0
    
    for (let letter of S) {
        if (balloonObj[letter] > 0) {
            let regex = new RegExp(letter);
            balloonObj[letter] -= 1
            counter += 1
            S = S.replace(regex, '')
        }
    }
    
    if (counter === 7) {
        realCounter++
        return solution(S, realCounter)
    }
    
    return realCounter
}
