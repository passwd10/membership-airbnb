const removeAllChildNode = (node) => {
  while(node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

module.exports = removeAllChildNode;