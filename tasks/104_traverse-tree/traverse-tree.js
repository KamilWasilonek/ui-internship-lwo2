export function traverseTree(tree, callback) {
  callback(tree);
  for (let i = 0; i < tree.children.length; i++) {
    traverseTree(tree.children[i], callback);
  }
}
