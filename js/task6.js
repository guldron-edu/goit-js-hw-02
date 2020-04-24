let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  if (input !== null) {
    if (Number.isNaN(Number(input))) {
      alert('Введите именно число, а не текст');
    } else {
      numbers.push(input);
      console.log(numbers);
    }
  }
} while (input !== null);

if (numbers.length === 0) {
  console.log('Вы ничего не ввели');
} else {
  for (let item of numbers) {
    total += Number(item);
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
