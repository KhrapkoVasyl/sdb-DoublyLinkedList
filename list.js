class Node {
  previous = null;
  next = null;
  value;

  constructor(value) {
    if (!value || typeof value !== 'string' || value.length !== 1) {
      throw new Error(
        'The specified value must be a string with a length equal to one'
      );
    }
    this.value = value;
  }
}

class List {
  #head = null;
  #tail = null;

  length() {
    let length = 0;
    let curr = this.#head;
    while (curr) {
      length++;
      curr = curr.next;
    }

    return length;
  }

  append(element) {
    const newNode = new Node(element);
    if (this.length() === 0) {
      this.#head = newNode;
      this.#tail = this.#head;
      return;
    }
    newNode.previous = this.#tail;
    this.#tail.next = newNode;
    this.#tail = newNode;
  }

  #isPosCorrect(pos) {
    return pos >= 0 && pos < this.length();
  }

  #getNode(pos) {
    if (!this.#isPosCorrect(pos)) throw new Error('Wrong position specified');
    let curr = this.#head;
    for (let i = 0; i <= pos; i++) {
      if (i === pos) return curr;
      curr = curr.next;
    }
  }

  insert(element, index) {
    const length = this.length();
    const isIndexEqualToZero = index === 0;
    if ((isIndexEqualToZero && !length) || index === length) {
      this.append(element);
      return;
    }
    if (!this.#isPosCorrect(index)) throw new Error('Wrong position specified');
    const newNode = new Node(element);
    if (isIndexEqualToZero) {
      this.#head.previous = newNode;
      newNode.next = this.#head;
      this.#head = newNode;
      return;
    }
    const next = this.#getNode(index);
    const prev = next.previous;

    prev.next = newNode;
    newNode.previous = prev;

    next.previous = newNode;
    newNode.next = next;
  }

  get(index) {
    return this.#getNode(index).value;
  }

  clone() {
    const newList = new List();
    let curr = this.#head;
    while (curr) {
      newList.append(curr.value);
      curr = curr.next;
    }
    return newList;
  }

  reverse() {
    const reversedList = new List();
    let curr = this.#tail;
    while (curr) {
      reversedList.append(curr.value);
      curr = curr.previous;
    }
    this.#head = reversedList.#head;
    this.#tail = reversedList.#tail;
  }

  findFirst(element) {
    const length = this.length();
    let curr = this.#head;
    for (let i = 0; i < length; i++) {
      if (curr.value === element) return i;
      curr = curr.next;
    }
    return -1;
  }

  findLast(element) {
    const length = this.length();
    let curr = this.#tail;
    for (let i = length - 1; i >= 0; i--) {
      if (curr.value === element) return i;
      curr = curr.previous;
    }
    return -1;
  }

  clear() {
    this.#head = null;
    this.#tail = null;
  }

  extend(elements) {
    if (!(elements instanceof List))
      throw new Error(
        'The expected object must be an instance of the List class'
      );
    if (!elements.#head) return;
    const listToAdd = elements.clone();

    if (this.length() === 0) {
      this.#head = listToAdd.#head;
      this.#tail = listToAdd.#tail;
      return;
    }
    this.#tail.next = listToAdd.#head;
    listToAdd.#head.previous = this.#tail;
    this.#tail = listToAdd.#tail;
  }

  delete(index) {
    const node = this.#getNode(index);
    const value = node.value;
    const length = this.length();
    if (length === 1) {
      this.clear();
    } else if (index === 0) {
      this.#head = node.next;
      this.#head.previous = null;
    } else if (index === length - 1) {
      this.#tail = node.previous;
      this.#tail.next = null;
    } else {
      const next = node.next;
      const prev = node.previous;

      next.previous = prev;
      prev.next = next;
    }
    return value;
  }

  deleteAll(element) {
    let curr = this.#head;
    let index = 0;
    while (curr) {
      if (curr.value === element) {
        this.delete(index);
        index--;
      }
      console.log(curr);
      curr = curr.next;
      index++;
    }
  }
}

module.exports = List;
