const { Node } = require('../lib/00-utils')
const { buildNodes } = require('../lib/01-push-and-build-one-two-three')
const {
  shuffleMerge,
  shuffleMergeV2,
  shuffleMergeV3,
} = require('../lib/13-shuffle-merge')

describe('13 Shuffle Merge', () => {
  createTests(shuffleMerge)
  createTests(shuffleMergeV2)
  createTests(shuffleMergeV3)

  function createTests(fn) {
    describe(fn.name, () => {
      it('should be able to handle two null arguments.', () => {
        expect(fn(null, null)).toEqual(null)
      })

      it('should be able to handle cases where one argument is null.', () => {
        expect(fn(new Node(1), null)).toEqualLinkedList(new Node(1))
        expect(fn(null, new Node(1))).toEqualLinkedList(new Node(1))
      })

      it('should be able to handle two lists of length 1.', () => {
        expect(fn(new Node(23), new Node(44))).toEqualLinkedList(buildNodes([23, 44]))
      })

      it('should be able to handle lists of length 2.', () => {
        expect(fn(buildNodes([1, 3]), buildNodes([2, 4])))
          .toEqualLinkedList(buildNodes([1, 2, 3, 4]))

        expect(fn(buildNodes([3]), buildNodes([2, 4])))
          .toEqualLinkedList(buildNodes([3, 2, 4]))

        expect(fn(buildNodes([4, 5]), buildNodes([1])))
          .toEqualLinkedList(buildNodes([4, 1, 5]))
      })

      it('should be able to handle a list of length 3.', () => {
        expect(fn(buildNodes([3, 4, 5]), buildNodes([9, 2])))
          .toEqualLinkedList(buildNodes([3, 9, 4, 2, 5]))

        expect(fn(buildNodes([1, 3, 8]), null))
          .toEqualLinkedList(buildNodes([1, 3, 8]))

        expect(fn(buildNodes([1, 3, 8]), buildNodes([2, 4, 9])))
          .toEqualLinkedList(buildNodes([1, 2, 3, 4, 8, 9]))
      })
    })
  }
})
