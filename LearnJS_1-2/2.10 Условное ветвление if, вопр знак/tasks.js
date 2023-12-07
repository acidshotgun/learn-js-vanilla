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
