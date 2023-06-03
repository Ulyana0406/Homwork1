//1
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
if (arr[i] === 10) {
console.log(arr[i]);
break;
}
console.log(arr[i]);
}

//3
const array = [1, 3, 5, 10, 20];

const str = array.join(' ');
console.log(str);

//4
const ar = [];

for (let i = 0; i < 3; i++) {
const innerArr = []; 
for (let j = 0; j < 3; j++) {
innerArr.push(1); 
}
ar.push(innerArr); 
}
console.log(ar); 

//5
const masiv = [1, 1, 1];

masiv.push(2, 2, 2);
console.log(masiv);

//6

const a = [9, 8, 7, 'a', 6, 5];
a.sort(); 
a.splice(a.indexOf('a'), 1); 
const filteredArr = a.filter(item => typeof item === 'number'); 
console.log(filteredArr); 

//7
const arra = [9, 8, 7, 6, 5];
const userInput = prompt('Введите число от 1 до 10');

if (arra.includes(+userInput)) { 
  console.log('Число найдено в массиве');
} else {
  console.log('Число не найдено в массиве');
}

//8
const stra = 'abcdef';

const reversedStr = stra.split('').reverse().join('');
console.log(reversedStr); 

//9
const mas = [[1, 2, 3], [4, 5, 6]];

const flatArr = mas.flat();
console.log(flatArr); 

//10
const num = [1, 3, 2, 6, 4, 10, 7, 8, 9, 5];

for (let i = 0; i < num.length - 1; i++) { 
  console.log(num[i] + num[i + 1]); 
}

//11
function squareArray(number) {
    return number.map(num => num ** 2);
  }
  
  const number = [1, 2, 3, 4, 5];
  const squaredArr = squareArray(number);
  console.log(squaredArr); 

  //12
  function getLengthWords(word) {
    return word.map(word => word.length);
  }
  
  const word = ['слово', '', 'слог', 'длинное предложение', 'буква'];
  const lengths = getLengthWords(word);
  console.log(lengths); 

  //13
  function filterPositive(arr) {
    return arr.filter(num => num < 0);
  }
  
  console.log(filterPositive([-1, 0, 5, -10, 56])); 
  console.log(filterPositive([-25, 25, 0, -1000, -2])); 