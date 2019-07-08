function lastIndexOf (array, index) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] == index) {
      return i;
    }
  }
  if (array[0] != index) {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
