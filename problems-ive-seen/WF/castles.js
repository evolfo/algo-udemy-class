function solution(A) {
    
    // if all the numbers in the array are the same, return 1
    const allSame = A.every(num => num === A[0])
    if (allSame) {
        return 1
    }
    
    // inititalizing counter at two because if the above case isn't met
    // then there will always be a first and last castle
    let counter = 2
    // if pv is true, it's a peak, if false, valley
    let pv
    
    // Finding out if first values are a peak or valley
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== A[i + 1]) {
            pv = A[i] > A[i + 1]
            break
        }
    }
    
    for (let i = 0; i < A.length; i++) {
        if (pv) {
            if (A[i] > A[i + 1]) {
                counter++
                pv = !pv
            } 
        } else {
            if (A[i] < A[i + 1]) {
                counter++
                pv = !pv
            }
        } 
    }
    
    return counter
}
