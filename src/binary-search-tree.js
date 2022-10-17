// const { NotImplementedError } = require('../extensions/index.js');


class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.rooot = null;
  }

  root() {
    return this.rooot;
  }

  add(data) {
    const newNode = new Node(data);
    if(this.rooot === null) {
      this.rooot = newNode;
      return;
    }
    let thisNode = this.rooot;
    while (thisNode) {
      if (newNode.data < thisNode.data) {
        if (thisNode.left === null) {
          thisNode.left = newNode;
          return;
        }
        thisNode = thisNode.left;
        thisNode.parent = thisNode.data;
      } else if (newNode.data > thisNode.data) {
        if (thisNode.right === null) {
          thisNode.right = newNode;
          return;
        }
        thisNode = thisNode.right;
        thisNode.parent = thisNode.data;
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

const visibleTree = new BinarySearchTree();

// visibleTree.add(10);
// visibleTree.add(12);
// visibleTree.add(14);
// visibleTree.add(9);
// visibleTree.root().value;
// console.log(visibleTree);

module.exports = {
  BinarySearchTree
};