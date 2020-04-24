const checkForSpam = function(message) {
  let spam = message.toLowerCase().includes('spam');
  let sale = message.toLowerCase().includes('sale');
  return sale === true || spam === true;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
