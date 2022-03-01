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
}
