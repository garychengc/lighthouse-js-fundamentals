function range(start, end, step) {
  let some_array = [];
  if (start > end || step < 0 || start == undefined || end == undefined || step == undefined) {
    return some_array;
  } else {
    for (let i = 0; i <= (end - start); i += step) {
      some_array.push (start + i);
    } 
  }
  return some_array;
}

console.log(range(30, 20, 5));
