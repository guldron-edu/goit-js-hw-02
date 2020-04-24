const findLongestWord = function(string) {
  const array = string.split(' ');
  let result = '';

  for (let i = 0; i < array.length; i += 1) {
    if (result.length < array[i].length) {
      result = array[i];
    }
  }
  return result;
};
//   for (const word of array) {
//     if (wordLength < word.length) {
//       wordLength = word.length;
//     }
//   }
//   for (const word of array) {
//     if (word.length === wordLength) {
//       result = word;
//     }
//   }
//   return result;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
