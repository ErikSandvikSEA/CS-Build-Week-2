var moveZeroes = function(arr) {
    let lastZeroIdx = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[lastZeroIdx] = arr[i]
            lastZeroIdx++
        }
    }
    for(let i = lastZeroIdx; i < arr.length; i++){
        arr[i] = 0
    }
};