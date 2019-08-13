function spellingBeeSolutions(wordlist, puzzles) {
    let counter = 0
    let arr = []

    for (let i = 0; i < puzzles.length; i++) {
        let keyLetter = puzzles[i][0]
        for (let j = 0; j < wordlist.length; j++) {
            if (wordlist[j].split('').every(letter => puzzles[i].includes(letter) && wordlist[j].includes(keyLetter))) {   
                counter++
            }
        }
        arr.push(counter)
        counter = 0
    }

    return arr
}