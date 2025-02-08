class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  minDepth() {
    if (!this.root) return 0;

    function helper(node) {
      if (!node) return Infinity;
      if (!node.left && !node.right) return 1;
      return Math.min(helper(node.left), helper(node.right)) + 1;
    }

    return helper(this.root);
  }

  maxDepth() {
    if (!this.root) return 0;

    function helper(node) {
      if (!node) return 0;
      return Math.max(helper(node.left), helper(node.right)) + 1;
    }

    return helper(this.root);
  }

  maxSum() {
    let result = -Infinity;

    function helper(node) {
      if (!node) return 0;
      let leftMax = Math.max(helper(node.left), 0);
      let rightMax = Math.max(helper(node.right), 0);
      result = Math.max(result, node.val + leftMax + rightMax);
      return node.val + Math.max(leftMax, rightMax);
    }

    helper(this.root);
    return result === -Infinity ? 0 : result;
  }

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let queue = [this.root];
    let result = null;

    while (queue.length) {
      let current = queue.shift();
      if (current.val > lowerBound) {
        if (result === null || current.val < result) {
          result = current.val;
        }
      }
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return result;
  }

  areCousins(node1, node2) {
    if (!this.root || node1 === this.root || node2 === this.root) return false;

    function getLevelAndParent(node, target, level = 0, parent = null) {
      if (!node) return null;
      if (node === target) return { level, parent };

      return (
        getLevelAndParent(node.left, target, level + 1, node) ||
        getLevelAndParent(node.right, target, level + 1, node)
      );
    }

    const node1Info = getLevelAndParent(this.root, node1);
    const node2Info = getLevelAndParent(this.root, node2);

    return (
      node1Info &&
      node2Info &&
      node1Info.level === node2Info.level &&
      node1Info.parent !== node2Info.parent
    );
  }

  static serialize(tree) {
    if (!tree.root) return "null";

    let result = [];
    let queue = [tree.root];

    while (queue.length) {
      let current = queue.shift();
      if (current) {
        result.push(current.val);
        queue.push(current.left);
        queue.push(current.right);
      } else {
        result.push(null);
      }
    }

    return JSON.stringify(result);
  }

  static deserialize(stringTree) {
    if (stringTree === "null") return new BinaryTree();

    let values = JSON.parse(stringTree);
    let root = new BinaryTreeNode(values.shift());
    let queue = [root];

    while (queue.length) {
      let current = queue.shift();
      if (values.length) {
        let leftVal = values.shift();
        if (leftVal !== null) {
          current.left = new BinaryTreeNode(leftVal);
          queue.push(current.left);
        }
      }
      if (values.length) {
        let rightVal = values.shift();
        if (rightVal !== null) {
          current.right = new BinaryTreeNode(rightVal);
          queue.push(current.right);
        }
      }
    }

    return new BinaryTree(root);
  }

  lowestCommonAncestor(node1, node2) {
    function helper(node) {
      if (!node || node === node1 || node === node2) return node;

      let left = helper(node.left);
      let right = helper(node.right);

      if (left && right) return node;
      return left || right;
    }

    return helper(this.root);
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
