function firstMissingPositive(nums) {
    const obj = {}
    let counter = 1
    
    for (let num of nums) {
        obj[num] = true
    }
    
    for (counter; counter <= nums.length; counter++) {
        // the first iteration, counter === 1, 1 < 4;  
        // obj[1] === true, so this if statement isn't met

        // second iteration, counter === 2, 2 < 4
        // obj[2] === undefined, so the if statment is met
        if (obj[counter] !== true) {
            // 2 will be returned, and is the first missing positive number in the input array
            return counter
        } 
    }
    
    return counter
};