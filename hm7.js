//1

let str = "js";
let upperStr = str.toUpperCase();
console.log(upperStr); 

//2
function searchStart(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
  }
//3

const num = 32.58884;
const roundDown = Math.floor(num);   
const roundUp = Math.ceil(num);      
const roundNear = Math.round(num);

//4
const arr = [52, 53, 49, 77, 21, 32];
const maxNum = Math.max(...arr);
const minNum = Math.min(...arr);
console.log(`Максимальное число: ${maxNum}`);
console.log(`Минимальное число: ${minNum}`);
//5
function randomNum() {
    const num = Math.floor(Math.random() * 10) + 1;
    console.log(num);}

//6
function getRandomArrNumbers(num) {
    const arr = [];
    const len = Math.floor(num / 2);
    
    for (let i = 0; i < len; i++) {
      arr.push(Math.floor(Math.random() * num));
    }
    
    return arr;
  }

  //7
function randomNumInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//8
let myDate = new Date("7 May 2023");
console.log(myDate); 

//9
//10

function formatDate(date) {
    const weekdays = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];
  
    const hours = `${date.getHours()}`.padStart(2, '0');
    const minutes = `${date.getMinutes()}`.padStart(2, '0');
    const seconds = `${date.getSeconds()}`.padStart(2, '0');
  
    return `Дата: ${day} ${month} ${year} - это ${weekday}. \nВремя: ${hours}:${minutes}:${seconds}`;
  }

  