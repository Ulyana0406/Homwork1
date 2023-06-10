
    function monthNumber () {
        let month = +prompt('Напишите число месяца')
        if (month < 1 || month > 12) {
          alert ('Неправильный номер месяца');
        } else if (month === 12 || month === 1 || month === 2) {
          alert ('Зима');
        } else if (month >= 3 && month <= 5) {
          alert ('Весна');
        } else if (month >= 6 && month <= 8) {
          alert ('Лето');
        } else {
          alert ('Осень');
        }
      }
      
function fruits () {
let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

words = words.sort(() => Math.random() - 0.5);

alert(words);

let firstElement = prompt("Чему равнялся первый элемент массива?");
let lastElement = prompt("Чему равнялся последний элемент массива?");

if (firstElement === words[0] && lastElement === words[words.length-1]) {
  alert("Поздравляем, вы угадали оба элемента!");
} else if (firstElement === words[0] || lastElement === words[words.length-1]) {
  alert("Вы были близки к победе!");
} else {
  alert("К сожалению, вы не угадали ни один элемент массива");
}
}