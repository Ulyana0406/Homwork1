//1

function returnmoreless (a, b) {
    if (a>b) {
        return b;
    } else {
        return a;
    }
};
returnmoreless (5, 8)
returnmoreless (19, 9)

//2

function numberchetnechet(n) {
    if (n % 2 == 0) {
        console.log ('Число четное');
    } else {
        console.log ('Число нечетное') ;
    }
};

numberchetnechet(6)
//3.1
function numbersquare() {
    let n= +prompt("Введите число")
    console.log(n**2)
};

//4

let age = +prompt("Сколько Вам лет?");

// в зависимости от условия объявляем функцию
if ( 0<age&&age<=12) {

    function printMessage() {
        alert("Привет, друг!");
    }

}
else if (age<0){

    function printMessage() {
        alert("Вы ввели неправильное значение");
    }

}
else  {

    function printMessage() {
        alert("Добро пожаловать");
    }

};

printMessage();

//5
function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return 'Одно или оба значения не являются числом';
    } else {
      return a * b;
    }
  }
  
  console.log(multiply(2, 3)); // 6
  console.log(multiply('2', 3)); // Одно значение не являются числом
  console.log(multiply('a', 'b')); // Оба значения не являются числами
//6
function cube() {
    let num = prompt('Введите число:');
    if (isNaN(num)) {
      return 'Переданный параметр не является числом';
    } else {
      let result = num ** 3;
      return `${num} в кубе равняется ${result}`;
    }
  }
  
  for (let i = 0; i <= 10; i++) {
    console.log(cube(i));
  }

//7
function getRectangleArea() {
    return this.radius * this.radius *3,14;
  }
  function getRectanglePerimeter() {
    return  2*3,14*this.radius ;
  }
  
  const circle1 = {
    radius: 4,
    
  
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  };
  
  const circle2 = {
    radius: 7,

  
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  };
  
  console.log(circle1.getArea());
  console.log(circle1.getPerimeter());
  console.log(circle2.getArea());
  console.log(circle2.getPerimeter());