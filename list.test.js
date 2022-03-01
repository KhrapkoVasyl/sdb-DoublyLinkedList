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

describe('Testing the .insert() method', () => {
  test('Should insert new node with value equal to "1" to the position with index 1 in the list', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');

    list.insert('1', 1);

    expect(list.length()).toBe(4);
    expect(list.get(1)).toBe('1');
  });

  test('Should insert new node with value equal to 1 to the position with index 0 in the empty list', () => {
    const list = new List();

    list.insert('1', 0);

    expect(list.length()).toBe(1);
    expect(list.get(0)).toBe('1');
  });

  test('Should insert new node with value equal to 1 to the position with index 3 (in the tail) of the list', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');

    list.insert('1', 3);

    expect(list.length()).toBe(4);
    expect(list.get(3)).toBe('1');
  });

  test('Should throw an error when trying to insert a node with the wrong value (string specified as a value has length not equal to 1)', () => {
    const list = new List();

    expect(() =>
      list
        .insert('11', 0)
        .toThrow(
          'The specified value must be a string with a length equal to one'
        )
    );
  });

  test('Should throw an error when trying to insert node at negative index in a list', () => {
    const list = new List();

    expect(() => list.insert('1', -1)).toThrow('Wrong position specified');
  });

  test('Should throw an error when trying to insert a node at an index greater than the length of the list', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(() => list.insert('1', 5)).toThrow('Wrong position specified');
  });
});

describe('Testing the .findFirst() method', () => {
  test('Should return position of the first node with value equal to "1"', () => {
    const list = new List();
    list.append('0');
    list.append('1');
    list.append('2');
    list.append('1');

    expect(list.findFirst('1')).toBe(1);
  });

  test('Should return -1 for a given value that is not contained in the nodes of the list', () => {
    const list = new List();
    list.append('0');
    list.append('1');
    list.append('2');
    list.append('1');

    expect(list.findFirst('@')).toBe(-1);
  });
});

describe('Testing the .findLast() method', () => {
  test('Should return position of the last node with value equal to "1"', () => {
    const list = new List();
    list.append('0');
    list.append('1');
    list.append('2');
    list.append('1');

    expect(list.findLast('1')).toBe(3);
  });

  test('Should return -1 for a given value that is not contained in the nodes of the list', () => {
    const list = new List();
    list.append('0');
    list.append('1');
    list.append('2');
    list.append('1');

    expect(list.findLast('@')).toBe(-1);
  });
});

describe('Testing the .clear() method', () => {
  test('Should clear all list items', () => {
    const list = new List();
    list.append('0');
    list.append('1');
    list.append('2');
    list.append('1');

    list.clear();

    expect(list.length()).toBe(0);
  });
});

describe('Testing the .delete() method', () => {
  test('Should clear the list, when trying to remove the only element in the list, and return the value of that element', () => {
    const list = new List();
    list.append('a');

    const removedValue = list.delete(0);

    expect(list.length()).toBe(0);
    expect(removedValue).toBe('a');
  });

  test('Should delete the element with index 0 of the list and get its value (in a list of 3 elements). The rest of the elements should move forward by one index', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');

    const removedValue = list.delete(0);

    expect(list.length()).toBe(2);
    expect(removedValue).toBe('a');
    expect(list.get(0)).toBe('b');
    expect(list.get(1)).toBe('c');
  });

  test('Should delete the last element of the list and get its value.', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');

    const removedValue = list.delete(2);

    expect(list.length()).toBe(2);
    expect(removedValue).toBe('c');
  });

  test('Should delete the element in the middle of the list (element at index 2). Elements after the removed node must move forward by one index.', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    list.append('e');

    const removedValue = list.delete(2);

    expect(list.length()).toBe(4);
    expect(removedValue).toBe('c');
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('b');
    expect(list.get(2)).toBe('d');
    expect(list.get(3)).toBe('e');
  });

  test('Should throw an error when trying to delete a node at negative index in a list', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(() => list.delete(-1)).toThrow('Wrong position specified');
  });

  test('Should throw an error when trying to delete a node in an empty list', () => {
    const list = new List();

    expect(() => list.delete(0)).toThrow('Wrong position specified');
  });

  test('Should throw an error when trying to delete a node at index greater than list length', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(() => list.delete(5)).toThrow('Wrong position specified');
  });
});

describe('Testing the .deleteAll() method', () => {
  test('Should delete all nodes with value equal to "a" in list with seven nodes', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('c');
    list.append('b');
    list.append('a');
    list.append('a');

    list.deleteAll('a');

    expect(list.length()).toBe(4);
    expect(list.get(0)).toBe('b');
    expect(list.get(1)).toBe('c');
    expect(list.get(2)).toBe('c');
    expect(list.get(3)).toBe('b');
  });

  test('Should delete the only element in the list without error', () => {
    const list = new List();
    list.append('a');

    list.deleteAll('a');

    expect(list.length()).toBe(0);
  });

  test('Should not delete nodes if the given value is not in any node of the list', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('c');
    list.append('b');
    list.append('a');
    list.append('a');

    list.deleteAll('1');

    expect(list.length()).toBe(7);
  });

  test('Should completely clear the list of nodes, each of which matches the given value', () => {
    const list = new List();
    list.append('a');
    list.append('a');
    list.append('a');
    list.append('a');
    list.append('a');
    list.append('a');
    list.append('a');

    list.deleteAll('a');

    expect(list.length()).toBe(0);
  });
});

describe('Testing the .clone() method', () => {
  test('Should create a copy of the list of 5 nodes. The copy and the original list must not be references to the same object', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    list.append('e');

    const copy = list.clone();

    expect(copy).not.toBe(list); // in JS two objects are only equal if they are references to the same object
    expect(copy.get(0)).toBe('a');
    expect(copy.get(1)).toBe('b');
    expect(copy.get(2)).toBe('c');
    expect(copy.get(3)).toBe('d');
    expect(copy.get(4)).toBe('e');
  });

  test('Should not change the nodes to the copied list when changing nodes in the original list', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    list.append('e');
    const copy = list.clone();

    list.append('1');
    list.append('2');
    list.append('3');
    list.delete(2);

    expect(copy).not.toBe(list); // in JS two objects are only equal if they are references to the same object
    expect(copy.length()).toBe(5);
    expect(list.length()).toBe(7);
    expect(copy.get(2)).toBe('c');
    expect(list.get(2)).not.toBe('c');
  });

  test('Should create a copy of the empty list without error', () => {
    const list = new List();

    const copy = list.clone();

    expect(copy).not.toBe(list); // in JS two objects are only equal if they are references to the same object
    expect(list.length()).toBe(0);
    expect(copy.length()).toBe(0);
  });
});

describe('Testing the .reverse() method', () => {
  test('Should reorder the nodes of a list of five items backwards', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    list.append('e');

    list.reverse();

    expect(list.length()).toBe(5);
    expect(list.get(0)).toBe('e');
    expect(list.get(1)).toBe('d');
    expect(list.get(2)).toBe('c');
    expect(list.get(3)).toBe('b');
    expect(list.get(4)).toBe('a');
  });

  test('Should reverse an empty list without error', () => {
    const list = new List();

    list.reverse();

    expect(list.length()).toBe(0);
  });
});
