/**
 * Tree longest zig zag
 * https://app.codility.com/programmers/trainings/7/tree_longest_zig_zag/
 * 
 * score: 100%
 */

/**
 * @param T tree
 * @param zigzagCount how long is the zig zag for the curr path
 * @param position 'left' or 'right' => position as parent's child
 */
function recursiveZigZag(subTree, zigzagCount, position) {
  if (!subTree.l && !subTree.r) {
    return zigzagCount;
  } else {
    let leftCount = 0;
    let righCount = 0;
    if (subTree.l) { // go left
      let nextZigZagCount = zigzagCount;
      if (position === 'right') {
        nextZigZagCount++;
      }
      leftCount = recursiveZigZag(subTree.l, nextZigZagCount, 'left');

    }
    if (subTree.r) { // go right
      let nextZigZagCount = zigzagCount;
      if (position === 'left') {
        nextZigZagCount++;
      }
      righCount = recursiveZigZag(subTree.r, nextZigZagCount, 'right');

    }
    if (leftCount >= righCount) {
      return leftCount;
    } else {
      return righCount;
    }
  }
}

function solution(T) {
  return recursiveZigZag(T, 0, '');
}
