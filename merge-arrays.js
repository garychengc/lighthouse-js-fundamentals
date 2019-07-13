function merge (array1, array2) {
  let arrayNew = array1.concat(array2);
  return arrayNew.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
