function twoSum(arr, target) {
    const counter = {}    
    for(let i = 0; i < arr.length; i++){
        const potentialMatch = target - arr[i]
        if(counter[potentialMatch]){
            return [arr.indexOf(potentialMatch), i]
        }
        counter[arr[i]] = true
    }
};