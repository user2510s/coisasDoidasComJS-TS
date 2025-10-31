let arvore = {
    left: {
        left: undefined,
        right: {
            value: 3
        },
        value: 2
    },
    right: undefined,
    value: 10
}

function preOrder(tree: any){
    console.log(tree.value)
    tree.left && preOrder(tree.left)
    tree.right && preOrder(tree.right)
}
function inOrder(tree: any){
    tree.left && inOrder(tree.left)
    console.log(tree.value)
    tree.right && inOrder(tree.right)
}

preOrder(arvore)
inOrder(arvore)