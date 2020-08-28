def levelOrder(self, root: TreeNode) -> List[List[int]]:
    result = []
    if root is None:
        return result
    q = [root]
    while len(q) > 0:
        levelVals = []
        level = []
        for node in q:
            levelVals.append(node.val)
            if node.left:
                level.append(node.left)
            if node.right:
                level.append(node.right)
        result.append(levelVals)
        q = level
    return result
