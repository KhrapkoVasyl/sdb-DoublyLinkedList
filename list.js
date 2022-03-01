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
}
