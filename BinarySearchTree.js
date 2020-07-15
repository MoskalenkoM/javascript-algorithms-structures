class BSTNode {
  constructor(key, value, size) {
    this._key = key;
    this._value = value;
    this._size = size;
    this._left = null;
    this._right = null;
  }
}

class BST {
  constructor() {
    this._root = null;
  }

  _itSize(node) {
    if(node === null) {
      return 0;
    }
    return node._size;
  }

  size() {
    return this._itSize(this._root);
  }

  isEmpty() {
    return this._root === null;
  }

  contains(key) {
    if(key === null) {
      return false;
    }
    return this.getNode(key) !== null;
  }

  _itGetNode(node, key) {
    if(node === null) {
      return null;
    }
    if(key === undefined) {
      return new Error('Key is undefined!');
    }

    if(key < node._key) {
      return this._itGetNode(node._left, key);
    }
    if(key > node._key) {
      return this._itGetNode(node._right, key);
    }
    if(key === node._key) {
      return node._value;
    }
  }

  getNode(key) {
    return this._itGetNode(this._root, key);
  }

  _itSetNode(x, key, value) {
    if(x === null) {
      return new BSTNode(key, value, 1);
    }

    if(key < x._key) {
      x._left = this._itSetNode(x._left, key, value);
    } else if(key > x._key) {
      x._right = this._itSetNode(x._right, key, value);
    } else {
      x._value = value;
    }

    x._size = 1 + this._itSize(x._left) + this._itSize(x._right);

    return x;
  }

  setNode(key, value) {
    if(key === undefined || value === undefined) {
      return new Error('Method SetNode has no input parameters key or value!');
    }
    if(key === null) {
      // delete node
      return;
    }
    this._root = this._itSetNode(this._root, key, value);
    return !!this._root;
  }
}

const bst = new BST();
console.log('bst size:', bst.size());
console.log('bst is empty:', bst.isEmpty());
console.log('add 0', bst.setNode(0, 'zero'));
console.log('add 2', bst.setNode(2, 'two'));
console.log('add 7', bst.setNode(7, 'seven'));
console.log('add -2', bst.setNode(-2, 'minus two'));
console.log('bst size:', bst.size());
console.log('bst is empty:', bst.isEmpty());
console.log('bst has 7:', bst.contains(7));
console.log('bst has 3:', bst.contains(3));