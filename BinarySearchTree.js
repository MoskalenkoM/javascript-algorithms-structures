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

  hasNode(key) {
    if(key === undefined) {
      return new Error('Method "hasNode" has not "key" for checking!');
    }
    return this.getNode(key) !== null;
  }

  _itGetNode(node, key) {
    if(node === null) {
      return null;
    }
    if(key < node._key) {
      return this._itGetNode(node._left, key);
    } else if(key > node._key) {
      return this._itGetNode(node._right, key);
    } else {
      return node._value;
    }
  }

  getNode(key) {
    if(key === undefined) {
      return new Error('Method "getNode" has not "key" for checking!');
    }
    return this._itGetNode(this._root, key);
  }

  _itSetNode(x, key, value) {
    if(x === null) {
      /* first node */
      return new BSTNode(key, value, 1);
    }

    if(key < x._key) {
      /* go to left */
      x._left = this._itSetNode(x._left, key, value);
    } else if(key > x._key) {
      /* go to right */
      x._right = this._itSetNode(x._right, key, value);
    } else {
      /* set value */
      x._value = value;
    }

    /* increasing size */
    x._size = this._itSize(x._left) + this._itSize(x._right) + 1;

    /* return node */
    return x;
  }

  setNode(key, value) {
    if(key === undefined || value === undefined) {
      return new Error('Method "SetNode" has no input parameters "key" or "value"!');
    }
    if(value === null) {
      // TODO: delete node
      return;
    }
    this._root = this._itSetNode(this._root, key, value);
    /* TODO: return below just for console.log */
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
console.log('bst has 7:', bst.hasNode(7));
console.log('bst has 3:', bst.hasNode(3));