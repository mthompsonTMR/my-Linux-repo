class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }
  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
   
  }
  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }

  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
   
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
    
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let node of this.nodes) {
      if (node.adjacent.has(vertex)) {
        node.adjacent.delete(vertex);
      }
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const visited = new Set ();
    const result = [];
    //code
    function transverse(vertex){
      if(!vertex || visited.has(vertex)) return;
      visited.add(vertex);
      result.push(vertex.value);

      vertex.adjacent.forEach(neighbor => {
        transverse(neighbor);
      });
    }
    transverse(start);
    return result;
  }
  depthFirstSearchIterative(start) {
    const stack = [start];
    const result = [];
    const vistited = new Set();
    
        while (stack.length > 0) {
      const current = stack.pop();

      if(!vistited.has(current)) {
        vistited.add(current);
        result.push(current.value);

        current.adjacent.forEach(neighbor => {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        });
      }
    }
      return result;
  }
  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const visited = new Set ();
    const queue = [start];
    const result = [];

    while (queue.length > 0) {
      const current = queue.shift();
      if (!visited.has(current)) {
        visited.add(current);
        result.push(current.value);

        current.adjacent.forEach(neighbor => {
          if(!visited .has(neighbor)) {
            queue.push(neighbor);
          }
        });
      }
    }
    return result;
  }

  shortestPath(start, target) {
    const visited = new Set();
    const queue = [[start, [start.value]]];
    while (queue.length >0) {
      const [current, path ] = queue.shift();
      if (current === target) return path;

      if (!visited.has(current)){
        visited.add(current);

        current.adjacent.forEach(neighbor => {
          if (!visited.has(neighbor)) {
              queue.push([neighbor, [...path, neighbor.value]]);
          }
        });
      }
    }
    return null;

  }
}

module.exports = {Graph, Node}