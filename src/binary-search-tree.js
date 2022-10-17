// const { NotImplementedError } = require('../extensions/index.js');


class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
    // this.parent = null;
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
        // thisNode.parent = thisNode.data;
      } else if (newNode.data > thisNode.data) {
        if (thisNode.right === null) {
          thisNode.right = newNode;
          return;
        }
        thisNode = thisNode.right;
        // thisNode.parent = thisNode.data;
      }
    }
  }
  preOrderDFS(node, callback) {
    if (!node) {
      return;
    }
    if (callback) {
      callback(node);
    }
    this.preOrderDFS(node.left, callback);
    this.preOrderDFS(node.right, callback);
  }
  has(data) {
    return this.hasNode(this.rooot, data);
  }
  hasNode(thisNode, data) {
    if (thisNode === null) return false;
    if (thisNode.data === data) return true;
    if (data < thisNode.data) {
      return this.hasNode(thisNode.left, data)
    }
    if (data > thisNode.data) {
      return this.hasNode(thisNode.right, data)
    }
  }

  find(data) {
    return this.findNode(this.rooot, data);
  }
  findNode(thisNode, data) {
    if (thisNode === null) return null;
    if (thisNode.data === data) return thisNode;
    if (data < thisNode.data) {
      return this.findNode(thisNode.left, data)
    }
    if (data > thisNode.data) {
      return this.findNode(thisNode.right, data)
    }
  }

  remove(data) {
    this.rooot = this.removeNode(this.rooot, data);
  }
  minNodeFoRemove(thisNode) {
    if (thisNode.left === null)
        return thisNode;
    else
        return this.minNodeFoRemove(thisNode.left);
}
  removeNode (thisNode, data) {
    if (thisNode === null) {
      return null;
  } else if (data < thisNode.data) {
    thisNode.left = this.removeNode(thisNode.left, data);
    return thisNode;
  } else if (data > thisNode.data) {
    thisNode.right = this.removeNode(thisNode.right, data);
    return thisNode;
  } else {
    if (!thisNode.left && !thisNode.right) {
      thisNode = null;
      return thisNode;
    }
    if (!thisNode.left) {
      thisNode = thisNode.right;
      return thisNode;
    }
    if (!thisNode.right) {
      thisNode = thisNode.left;
      return thisNode;
    }

    let NodeToInsert = this.minNodeFoRemove(thisNode.right);
    thisNode.data = NodeToInsert.data;
    thisNode.right = this.removeNode(thisNode.right, NodeToInsert.data);
    return thisNode;
  }
  }

  min() {
    return this.searchMinNode(this.rooot);
  }
  searchMinNode (thisNode) {
    if (thisNode === null) return null;
    if (thisNode.left === null) return thisNode.data;
    if (thisNode.left.data < thisNode.data) {
      return this.searchMinNode(thisNode.left)
    }
  }

  max() {
    return this.searchMaxNode(this.rooot);
  }
  searchMaxNode (thisNode) {
    if (thisNode === null) return null;
    if (thisNode.right === null) return thisNode.data;
    if (thisNode.right.data > thisNode.data) {
      return this.searchMaxNode(thisNode.right)
    }
  }


}

const visibleTree = new BinarySearchTree();

// visibleTree.add(10);
// visibleTree.add(12);
// visibleTree.add(11);
// visibleTree.add(14);
// visibleTree.add(13);
// visibleTree.add(9);
// visibleTree.add(5);
// visibleTree.add(3);
// visibleTree.add(1);
// console.log(visibleTree);

module.exports = {
  BinarySearchTree
};