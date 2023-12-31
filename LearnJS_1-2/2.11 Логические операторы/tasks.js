// 1) Что выведет код ниже?
console.log(null || 2 || undefined); // 2 (тк || получает первое true) [+]

// 2) Что выведет код ниже?
console.log(console.log(1) || 2 || console.log(3)); // 1 2
//    (тк console.log не вернет ничего => undefined. Но в консоль значение выведет) [-]

// 3) Что выведет код ниже?
console.log(1 && null && 2); // null (&& выводит первый false)  [+]

// 4) Что выведет код ниже?
console.log(console.log(1) && console.log(2)); // 1 undefined [-]
// (сначала выводится console.log(1), затем undefined тк консоль не выводит ничего)
// (сторой console.log игнорируется, тк && уже вернул первый undefined и остановился)

// 5) Что выведет код ниже?
console.log(null || (2 && 3) || 4); // 3  [+]
// (Преоритет && выше и он выполнится первый вернул последний true => 3)
// (null || 3 вернет первый true => 3)
// (3 || 4 вернет первый true => 3)

// 6) Что выведет код ниже?
let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

console.log(value); // 30 [-]
// (&&= работает только если есть true => первый пропускается)
// (||= работает только с false => value = 20)
// (&&= работает с true => value = 20(true) === 30 )
// (||= не сработает, тк value уже true ( ||= работает только с false))

// 7) Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

let age = 13;

if (age >= 14 && age <= 90) {
  console.log("Находится в диапозоне.");
} else {
  console.log("Число вышло из диапозона");
}

// 8) Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

let ageTwo = 11;

// Первый вар
if (ageTwo < 14 || ageTwo > 90) {
  console.log("Число не в диапозоне");
} else {
  console.log("неверно! Число в диапозоне");
}

// Второй вар с !
if (!(ageTwo >= 14 && ageTwo <= 90)) {
  console.log("Число не в диапозоне");
} else {
  console.log("неверно! Число в диапозоне");
}

// 9) Какие из перечисленных ниже console.log выполнятся?                       [+]
// Какие конкретно значения будут результатами выражений в условиях if(...)?
if (-1 || 0) console.log("first"); // да (тк || выведет первый true => это -1)
if (-1 && 0) console.log("second"); // нет (тк && выдаст первый false => 0)
if (null || (-1 && 1)) console.log("third"); // да
//  (-1 и 1 == true(первый тру это -1), null || -1 => true (-1))

// 10) Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено»,
// в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

//    Если введён пароль «Я главный», то выводить «Здравствуйте!»,
//    Иначе – «Неверный пароль»,
//    При отмене или в случае если ничего не введено – «Отменено».

// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''.
// Нажатие клавиши Esc во время запроса возвращает null.

let answer = prompt("Кто там?"); //         [+]

if (answer == "Админ") {
  console.log(answer);
  let password = prompt("Введи пароль");

  if (password == "Я главный") {
    alert("Здравствуйте!!!");
  } else if (password == null || password == "") {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (answer == null || answer == "") {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
