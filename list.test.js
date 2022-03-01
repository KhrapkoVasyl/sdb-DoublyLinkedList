const List = require('./list');

describe('Testing the .length() method', () => {
  test('Should return the length of an empty list', () => {
    const list = new List();

    expect(list.length()).toBe(0);
  });

  test('Should return the length of list with three elements', () => {
    const list = new List();
    list.append('1');
    list.append('2');
    list.append('3');

    expect(list.length()).toBe(3);
  });
});

describe('Testing the .append() method', () => {
  test('Should append new node with value equal to 1 to an empty list', () => {
    const list = new List();

    list.append('1');

    expect(list.length()).toBe(1);
    expect(list.get(0)).toBe('1');
  });

  test('Should throw an error when trying to append a node with the wrong value (string specified as a value has length not equal to 1)', () => {
    const list = new List();

    expect(() =>
      list
        .append('11')
        .toThrow(
          'The specified value must be a string with a length equal to one'
        )
    );
  });

  test('Should append new node to list containing one element', () => {
    const list = new List();
    list.append('1');

    list.append('2');

    expect(list.length()).toBe(2);
    expect(list.get(0)).toBe('1');
    expect(list.get(1)).toBe('2');
  });
});

describe('Testing the .get() method', () => {
  test('Should return the element in the list at index 2', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    list.append('e');

    expect(list.get(2)).toBe('c');
  });

  test('Should throw an error when trying to get an element with a negative index', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(() => list.get(-1)).toThrow('Wrong position specified');
  });

  test('Should throw an error when trying to get the element at index zero from an empty list', () => {
    const list = new List();

    expect(() => list.get(0)).toThrow('Wrong position specified');
  });

  test('Should throw an error when trying to get an element with an index greater than the length of the list', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(() => list.get(5)).toThrow('Wrong position specified');
  });
});
