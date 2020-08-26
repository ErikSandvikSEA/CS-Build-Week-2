var generate = function(numRows) {
    const rows = []
    for(let i = 0; i<numRows; i++){
        //first row
        if(i===0){
            rows.push([1])
        }
        //2nd row
        else if(i===1){
            rows.push([1,1])
        }
        //subsequent rows
        else{
            const newRow = [1]
            const middleChunk = i-1
            for(let j = 0; j<middleChunk; j++){
                const colIdx = j+1
                const prevRow = rows[rows.length-1]
                const val = prevRow[colIdx] + prevRow[colIdx-1]
                newRow.push(val)
            }
            newRow.push(1)
            rows.push(newRow)
        }
    }
    return rows
};

