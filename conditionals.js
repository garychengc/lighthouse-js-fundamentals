// const temperature = -2;

// if (temperature < 0) {
//   console.log('Make sure you pick out a scarf!');
// } else if (temperature <15) {
//   console.log('Short sleeves won\'t cut it!');
// } else {
//   console.log('Short sleeves are fine');
// }

// console.log('Now you\'re ready to go out!');

// const isCitizen = true;
// const age = 17;

// if (isCitizen && age > 18) {
//   console.log('You are eligible to vote');
// }

// const temperature = 41;

// if (temperature < -40 || temperature > 40) {
//   console.log('Maybe going outside isn\'t such a great idea...');
// }

// const raining = false;
// if (!raining) {
//   console.log('Leave your numbrella at home!');
// }

const whichSchool  = function (age) {
  if (age < 13) {
    return ('Elementary School');
  } else if (age >= 13 && age <= 18) {
    return ('Secondary School');
  } else {
    return ('Lighthouse Labs');
  }
};

console.log(whichSchool(17));



