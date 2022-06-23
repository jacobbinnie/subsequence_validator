Hey! This script compares the two arrays and validates whether the second array is a subsequence of the first.

const array = [7, 1, 22, 23, 6, -1, 8, 11];
const sequence = [1, 6, -1, 11];

function isValidSubsequence(array, sequence) {
  let status = true;
  let arrayDuplicated;
  let sequenceDuplicated;

  // Checks (separately) if every item in array & subsequence are the same.
  array.every((item) => item === array[0] && array.length > 1)
    ? (arrayDuplicated = true)
    : null;
  sequence.every((item) => item === sequence[0] && sequence.length > 1)
    ? (sequenceDuplicated = true)
    : null;

  if (sequence.length === 1) {
    array.includes(sequence[0]) ? (status = true) : (status = false);
  } else {
    for (let i = 0; i < sequence.length - 1; i++) {
      i !== sequence.length - 1
        ? array.indexOf(sequence[i]) < array.indexOf(sequence[i + 1])
          ? null
          : (status = false)
        : null;
    }
  }
  // Checks if array is shorter than subsequence.
  array.length < sequence.length ? (status = false) : null;

  arrayDuplicated === true && sequenceDuplicated === true
    ? array[0] === sequence[0]
      ? (status = true)
      : (status = false)
    : null;

  return status;
}
console.log(isValidSubsequence(array, sequence));
