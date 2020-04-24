const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
console.log('Вывод массива цифр:');
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
console.log('Вывод массива имён:');
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
