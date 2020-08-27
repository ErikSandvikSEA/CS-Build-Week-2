function decodeString(s){
    const stack = [];
    
    for(let char of s) { 
        if(char === "]") {
            let decoded = getInner(stack);
            let num = getNum(stack);
            let repeated = decoded.repeat(num);
            
            stack.push(repeated);

        } else stack.push(char);
    }
    let result = '';
    while(stack.length > 0){
        result = stack.pop() + result   
    }
    return result;
};

function getNum(stack){
    let result = '';
    while(isNum(stack[stack.length - 1])){
        result = stack.pop() + result
    }
    return parseInt(result);
};

function getInner(stack){
    let result = '';
    while(stack[stack.length - 1] !== "[") {
        result = stack.pop() + result
    }
    stack.pop(); // remove leftover
    return result;
}

function isNum(char){
    return char >= '0' && char <= '9'
}