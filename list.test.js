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
