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
