<p align="center">
    <a href="https://github.com/KhrapkoVasyl/sdb-DoublyLinkedList/issues">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/KhrapkoVasyl/sdb-DoublyLinkedList?style=for-the-badge"></a>
    <a href="https://github.com/KhrapkoVasyl/sdb-DoublyLinkedList/network">
        <img alt="GitHub forks" src="https://img.shields.io/github/forks/KhrapkoVasyl/sdb-DoublyLinkedList?style=for-the-badge">
    </a>
    <a href="https://github.com/KhrapkoVasyl/sdb-DoublyLinkedList/stargazers">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/KhrapkoVasyl/sdb-DoublyLinkedList?style=for-the-badge">
    </a>
    <a href="https://github.com/KhrapkoVasyl/sdb-DoublyLinkedList/blob/main/LICENSE">
        <img alt="GitHub license" src="https://img.shields.io/github/license/KhrapkoVasyl/sdb-DoublyLinkedList?style=for-the-badge">
    </a>
    <a href="https://github.com/KhrapkoVasyl/sdb-DoublyLinkedList">
        <img alt="GitHub license" src="https://img.shields.io/github/contributors/KhrapkoVasyl/sdb-DoublyLinkedList.svg?style=for-the-badge">
    </a>

</p>

<div align="center">
  <h1 align="center">Doubly Linked List</h1>
</div>

## About the project

This application is a simple implementation of doubly linked list.
Lab work №2 on software development methodologies.

## Variant number calculation

`0427 % 2 = 1`

Remainder of division = 1, so my variant - [doubly linked list](#task-description-by-my-variant)

## Task description by my variant

A **linked list** is a data structure that consists of interconnected nodes. The node contains directly data and information about neighboring nodes. In my case, in a _doubly linked list_, each node contains data and links to the next **AND** previous items.

This project implements a simple version of a doubly linked list as a List class. List nodes are instances of the Node class. Each node has a value, and links to the previous and next node. The value of the node is a character (string of length 1).

The list has available methods:

- **length()**

  The operation to determine the length of the list.

  ***

- **append(element: Character)**

  The operation of adding an item to the end of the list.

  ***

- **insert(element: Character, index: Integer)**

  The operation of inserting an item at any position in the list.

  ***

- **delete(index: Integer)**

  The operation of deleting an item from the list at the specified position.

  ***

- **deleteAll(element: Character)**

  The operation removes all items from the list by value.

  ***

- **get(index: Integer)**

  The operation of getting a list item in any position.

  ***

- **clone()**

  List copy operation.

  ***

- **reverse()**

  List reversing operation.

  ***

- **findFirst(element: Character)**

  The operation of searching for an item by value from the list head.

  ***

- **findLast(element: Character)**

  The operation of searching for an item by value from the list tail.

  ***

- **clear()**

  List clear operation.

  ***

- **extend(elements: List)**

  List extension operation.

## Installation

Make sure you have [Node.js](http://nodejs.org/) installed. The program requires Node 14.x and newer versions to work correctly.

1. Clone the repo:
   ```sh
   git clone https://github.com/KhrapkoVasyl/sdb-DoublyLinkedList.git
   ```
2. Open project directory and install NPM packages:

   ```sh
   cd sdb-DoublyLinkedList
   npm install
   ```

3. To view a demonstration of the use of all class methods:

   ```sh
   node list.js
   ```

4. To run tests:

   ```sh
   npm test
   ```

## License

Distributed under the MIT License. See [LICENSE](https://github.com/KhrapkoVasyl/sdb-DoublyLinkedList/blob/main/LICENSE) for more information.

## Contributors

- Vasyl Khrapko - [@vazzz7zzzok](https://t.me/vazzz7zzzok) - khrapko2002@gmail.com

## Commit with failed CI tests

[Link to this commit](https://github.com/KhrapkoVasyl/sdb-DoublyLinkedList/commit/fe2bc44104c386310f14433b5d523ca11b3caa32)
