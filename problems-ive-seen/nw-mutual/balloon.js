// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function removeBalloon(S, returnCounter = 0) {
    const balloonObj = {B: 1, A: 1, L: 2, O: 2, N: 1}
    let counter = 0
    
    for (let letter of S) {
        if (balloonObj[letter] > 0) {
            let regex = new RegExp(letter)
            S = S.replace(regex, '')
            balloonObj[letter] -= 1
            counter += 1       
        }
    }

    if (counter === 7) {
        returnCounter++
        return removeBalloon(S, returnCounter)
    }    
    return returnCounter
}
