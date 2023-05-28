//1

let i=1;

while (i<=2) {
    console.log('Привет!');
    i++;
}

//2

let a=1;

while (a<=5) {
    console.log(+a);
    a++;
}

//3

let b=7;

while (b<=22) {
    console.log(+b);
    b++;
}
//4
let obj= {
    'Коля': '200',
	'Вася': '300',
	'Петя': '400',
};
for (let key in obj) { 
    alert(`${key} — зарплата  ${obj[key]} долларов`);
  }

//5
let n = 1000;
let num = 0;
while (n >= 50) {
  n /= 2;
  num++;
}
console.log(n);
console.log(num);

//6
const firstFriday = 5;

for (let i = firstFriday; i <= 31; i += 7) {
  console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}