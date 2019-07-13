function loopyLighthouse(range, multiples, words) {
  for (let i = 0; i <= (range[1] - range[0]); ++i) {
    if ((range[0] + i) % multiples[0] === 0 && (range[1] + i) % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if ((range[0] + i) % multiples[0] === 0) {
      console.log(words[0]);
    } else if ((range[0] + i) % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(range[0] + i);
    }
  }
}
loopyLighthouse([1, 10], [2, 5], ["Batty", "Beacon"]);

