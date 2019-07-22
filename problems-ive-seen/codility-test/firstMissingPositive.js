function firstMissingPositive(nums) {
    const obj = {}
    let counter = 1
    
    for (let num of nums) {
        obj[num] = true
    }
    
    for (counter; counter <= nums.length; counter++) {
        if (obj[counter] !== true) {
            return counter
        } 
    }
    
    return counter
};