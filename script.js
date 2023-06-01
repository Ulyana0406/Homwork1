
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
