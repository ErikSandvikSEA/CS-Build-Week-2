var levelOrder = function(root) {
    let result = []
    if(!root){
        return result
    }
    let q = [root]
    while(q.length > 0){
        let levelVals = []
        let nextLevel = []
        for(let node of q){
            levelVals.push(node.val)
            if(node.left){
                nextLevel.push(node.left)
            }
            if(node.right){
                nextLevel.push(node.right)
            }
        }
        result.push(levelVals)
        q = nextLevel
    }
    return result
};