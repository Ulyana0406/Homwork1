//1

let answer= prompt("Введите пароль");
let password = '1234';

if ( answer===password ) {
alert ('Пароль введен верно');
} else {
alert ('Пароль введен неверно');
}

//2
let number= 5;

if (0<number && number<10) {
console.log('Верно')
} else {
console.log('Неверно')
}

//3
let d=40;
let e=30;

if (d>100|| e>100) {
    console.log ('Верно');
} else {
    console.log('Неверно');
}


//4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

//5
let monthNumber = +prompt('Напиши число месяца')
let season;
switch (monthNumber) {
case 12:
case 1:
case 2:
season = 'зима';
break;
case 3:
case 4:
case 5:
season = 'весна';
break;
case 6:
case 7:
case 8:
season = 'лето';
break;
case 9:
case 10:
case 11:
season = 'осень';
break;
default:
console.log('Некорректный номер месяца');
}
console.log(season);