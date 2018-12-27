const dfs = (tree, ope) => {
    const walk = (tree, depth = 1) => {
        ope(tree.name, depth)
        if(tree.children) {
            tree.children.forEach((node) => {
                walk(node, depth + 1)
            })
        }
    }
    walk(tree)
}

const bfs = (tree, ope) => {
    const walk = (tree, depth = 1) => {
        const queue = []
        ope(tree.name, depth)
        if(tree.children){
            queue.push({
                nodes: tree.children,
                depth: depth + 1
            })
        }
        while(queue.length) {
            const item = queue.pop()
            item.nodes && item.nodes.forEach(node => {
                ope(node.name, item.depth)
                if(node.children) {
                    queue.push({
                        nodes: node.children,
                        depth: item.depth + 1
                    })
                }
            })
        }
    }
    walk(tree)
}


const dfsFilter = (tree, ope, filter) => {
    const walkAndCopy = (tree, depth = 1) => {
        if(filter(tree.name)) {
            const copy = {}
            ope(tree.name, depth)
            copy.name = tree.name
            if(tree.children) {
                copy.children = []
                tree.children.forEach((node) => {
                    const subTree = walkAndCopy(node, depth + 1)
                    subTree && copy.children.push(subTree)
                })
            }       
            return copy
        }
    }
    return walkAndCopy(tree)
}

const bfsFilter = const bfs = (tree, ope, filter) => {
    const walkAndCopy = (tree, depth = 1) => {
        const queue = []
        if (filter(tree.name)) {
            const copy = {}
            ope(tree.name, depth)
            copy.name = tree.name
            if(tree.children){
                copy.children = []
                queue.push({
                    nodes: tree.children,
                    depth: depth + 1,
                    copyNodes: copy.children
                })
            }
            while(queue.length) {
                const item = queue.pop()
                item.nodes && item.nodes.forEach(node => {
                    if(filter(node.name)) {
                        const copyNode = {}
                        ope(node.name, item.depth)
                        copyNode.name = node.name
                        if(node.children) {
                            copyNode.children = []
                            queue.push({
                                nodes: node.children,
                                depth: item.depth + 1,
                                copyNodes: copyNode.children
                            })
                        }
                        item.copyNodes.push(copyNode)
                    }
                })
            }
            return copy
        }
    }
    return walkAndCopy(tree)
}

export {
	dfs,
	bfs,
	dfsFilter,
	bfsFilter
}