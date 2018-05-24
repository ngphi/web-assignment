export function Node(data) {
  this.data = data.id;
  this.content = data;
  this.children = [];
}

export default class Tree {
  constructor() {
    this.root = null;
  }

  add(data, toNodeData) {
    const node = new Node(data);
    this.addNode(node,toNodeData);
  }

  addNode(node, toNodeData) {
    const parent = toNodeData ? this.findBFS(toNodeData) : null;
    if(parent) {
      parent.children.push(node);
    } else {
      if(!this.root) {
        this.root = node;
      } else {
        return "Root node is already assigned";
      }
    }
  }

  remove(data) {
    if(this.root.data === data) {
      return this.root = null;
    }

    const queue = [this.root];
    while(queue.length) {
      const node = queue.shift();
      for(let i = 0; i < node.children.length; i++) {
        if(node.children[i].data === data) {
          node.children.splice(i, 1);
        } else {
          queue.push(node.children[i]);
        }
      }
    }
  }


  contains(data) {
    return this.findBFS(data) ? true : false;
  }

  findBFS(data) {
    const queue = [this.root];
    while(queue.length) {
      const node = queue.shift();
      if(node.data === data) {
        return node;
      }
      for(let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
    return null;
  }

  _preOrder(node, fn) {
    if(node) {
      if(fn) {
        fn(node);
      }
      for(let i = 0; i < node.children.length; i++) {
        this._preOrder(node.children[i], fn);
      }
    }
  }

  _postOrder(node, fn) {
    if(node) {
      for(let i = 0; i < node.children.length; i++) {
        this._postOrder(node.children[i], fn);
      }
      if(fn) {
        fn(node);
      }
    }
  }

  traverseDFS(fn, method) {
    const current = this.root;
    if(method) {
      this[`_${method}`](current, fn);
    } else {
      this._preOrder(current, fn);
    }
  }

  isParent(currentData,targetData){
    const currentNode = this.findBFS(currentData);
    const targetNode = this.findBFS(targetNode);
    let queue = [currentNode];
    while(queue.length){
      const node = queue.shift();
      if(node.data === targetData){
        return true;
      }
      for(let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }      
    }
    return false;
  }

  traverseBFS(fn) {
    const queue = [this.root];
    while(queue.length) {
      const node = queue.shift();
      if(fn) {
        fn(node);
      }
      for(let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
  }

}

