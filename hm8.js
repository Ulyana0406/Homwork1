//1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 console.log(people.sort((a, b) => a.age - b.age)); // Сортировка по возрастанию возраста
 
 //2
 function map(arr, ruleFunction) {
    let newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = ruleFunction(arr[i]);
    }
  
    return newArr;
  }
  function isPositive(number) {
    return number > 0; // возвращает true, если число положительное
  }
  function isMale(person) {
    return person.gender === "male";
  }
  function filter(arr, ruleFunction) {
    return arr.filter((element) => {
      return ruleFunction(element);
    });
  }
  console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
  const peopl = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];
  console.log(filter(peopl, isMale));

  //3
  const startTime = new Date().getTime(); // запоминаем время старта программы

const intervalId = setInterval(() => { // запускаем интервал
  const currentTime = new Date(); // текущее время
  console.log(currentTime); // выводим в консоль текущее время
  const elapsedTime = Math.round((currentTime.getTime() - startTime) / 1000); // вычисляем сколько времени прошло
  if (elapsedTime >= 30) { // если прошло уже 30 секунд, то
    clearInterval(intervalId); // останавливаем интервал
    console.log('30 секунд прошло'); // выводим сообщение о завершении программы
  }
}, 3000);

//4
function delayForSecond(callback) {
    setTimeout(callback, 1000); // вызываем функцию callback через 1 секунду
 }
 
 delayForSecond(function () {
    console.log('Привет, Глеб!');
 })

 //5
 delayForSecond(() => sayHi('Глеб'));