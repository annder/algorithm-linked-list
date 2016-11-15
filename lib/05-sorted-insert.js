/*
https://www.codewars.com/kata/linked-lists-sorted-insert/javascript

Linked Lists - Sorted Insert

Write a SortedInsert() function which inserts a node into the correct location of a pre-sorted
linked list which is sorted in ascending order. SortedInsert takes the head of a linked list and
data used to create a node as arguments. SortedInsert() should also return the head of the list.

    sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
    sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
    sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)
*/

const { Node } = require('./00-utils')

/*
 * The recursion version
 */
function sortedInsert(head, data) {
  if (!head || data <= head.data) return new Node(data, head)

  head.next = sortedInsert(head.next, data)
  return head
}

/*
 * The loop version
 */
function sortedInsertV2(head, data) {
  let node = head
  let prevNode

  while (true) {
    if (!node || data <= node.data) {
      let newNode = new Node(data, node)
      if (prevNode) {
        prevNode.next = newNode
        return head
      } else {
        return newNode
      }
    }

    prevNode = node
    node = node.next
  }
}

module.exports = {
  sortedInsert,
  sortedInsertV2,
}
