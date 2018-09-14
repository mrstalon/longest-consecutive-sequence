module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let set = new Set();
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    set.add(array[i]);
  }

  for (let i = 0; i < array.length; i++) {
    if (!set.has(array[i] - 1)) {
      let localResult = 0;
      let startingValue = array[i];

      while(set.has(startingValue)) {
        localResult++;
        startingValue++;
      }

      result = Math.max(result, localResult);
    }
  }
  return result;
}
