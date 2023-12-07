// 1) Выведется ли console.log?

if ("0") {
  console.log("Привет"); // Да, тк "0" - это строка и будет true
}

// 2) Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let userAnswer = prompt("Какое «официальное» название JavaScript?", "");

if (userAnswer == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

// 3) Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

let userAnswerTwo = +prompt("Введите число");

if (userAnswerTwo > 0) {
  alert("Число больше нуля");
} else if (userAnswerTwo < -1) {
  alert("Число меньше нyля");
} else {
  alert("Число равно нулю");
}

// 4) Перепишите конструкцию if с использованием условного оператора '?':

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

let result = a + b < 4 ? "Мало" : "Много";

// 5) Перепишите if..else с использованием нескольких операторов '?'.

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

let login = "Директор";

let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";

console.log(message);
