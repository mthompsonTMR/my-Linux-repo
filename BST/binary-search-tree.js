


console.log("bindary-search-tree.js has been loaded");

class Node {
  constructor(value){
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    console.log(`inserting value: ${value}`);
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      console.log(`root set to: ${newNode.val}`);
      return this;
    }

    let current = this.root;

    while (true) {
      console.log(`currently at node: ${current.val}`);

      if (value < current.val) {
        console.log(`value ${value} is < ${current.val}`);
        if (current.left === null) {
          current.left = newNode;
          console.log(`Inserted ${value} as left child of ${current.val}`);
          return this;
        }
        current = current.left;
      } else if (value > current.val) {
        console.log(`value ${value} is greater than ${current.val}`);
        if (current.right === null) {
          current.right = newNode;
          console.log(`Inserted ${value} as right child of ${current.val}`);
          return this;
        }
        current = current.right;
      } else {
        console.log(`value ${value} already exists.`);
        return this;
      }
    }
  }

  insertRecursively(value, current = this.root) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    }

    if (value < current.val) {
      if (current.left === null) {
        current.left = new Node(value);
        return this;
      }
      return this.insertRecursively(value, current.left);
    } else if (value > current.val) {
      if (current.right === null) {
        current.right = new Node(value);
        return this;
      }
      return this.insertRecursively(value, current.right);
    }
    return this; // Avoid duplicates
  }

  find(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined;
  }

  findRecursively(val, current = this.root) {
    if (current === null) return undefined;
    if (val === current.val) return current;

    if (val < current.val) {
      return this.findRecursively(val, current.left);
    } else {
      return this.findRecursively(val, current.right);
    }
  }

  dfsPreOrder() {
    if (!this.root) return [];
    const data = [];

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  dfsInOrder() {
    if (!this.root) return [];
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  dfsPostOrder() {
    if (!this.root) return [];
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }

    traverse(this.root);
    return data;
  }

  bfs() {
    if (!this.root) return [];
    const data = [];
    const queue = [];

    if (this.root) queue.push(this.root);

    while (queue.length) {
      const node = queue.shift();
      data.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  remove(val) {
    function removeNode(node, val) {
      if (node === null) return null;

      if (val < node.val) {
        node.left = removeNode(node.left, val);
        return node;
      } else if (val > node.val) {
        node.right = removeNode(node.right, val);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          return null; // No children
        } else if (node.left === null) {
          return node.right; // Only right child
        } else if (node.right === null) {
          return node.left; // Only left child
        } else {
          let successor = node.right;
          while (successor.left !== null) {
            successor = successor.left;
          }
          node.val = successor.val;
          node.right = removeNode(node.right, successor.val);
          return node;
        }
      }
    }

    this.root = removeNode(this.root, val);
    return this;
  }

  isBalanced() {
    function height(node) {
      if (node === null) return 0;
      return 1 + Math.max(height(node.left), height(node.right));
    }

    function isBalancedNode(node) {
      if (node === null) return true;

      const leftHeight = height(node.left);
      const rightHeight = height(node.right);

      return (
        Math.abs(leftHeight - rightHeight) <= 1 &&
        isBalancedNode(node.left) &&
        isBalancedNode(node.right)
      );
    }

    return isBalancedNode(this.root);
  }

  findSecondHighest() {
    if (this.root === null || (this.root.left === null && this.root.right === null)) {
      return undefined;
    }

    let current = this.root;
    let parent = null;

    while (current.right !== null) {
      parent = current;
      current = current.right;
    }

    if (current.left !== null) {
      current = current.left;
      while (current.right !== null) {
        current = current.right;
      }
      return current.val;
    }

    return parent.val;
  }

  dfsInOrderIterative() {
    if (!this.root) return [];
    const stack = [];
    const result = [];
    let current = this.root;

    while (stack.length || current) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      result.push(current.val);
      current = current.right;
    }

    return result;
  }
}

module.exports = BinarySearchTree;
