// 1) Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Родители разрешили?");
  }
}

// Будет ли эта функция работать как-то иначе, если убрать else?
function checkAgeOne(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Родители разрешили?");
}

// Ответ: нет! Разницы в работе функций не будет тк в обоих вариантаъ блок return будет работать одинаково
// В первом случае он сработает в блок else
// Во втором случае сработает, если не сработал return true
//      тк return останавливает код в любом случае

// 2) Перепишите функцию, используя оператор '?' или '||'
/* Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат. */

function checkAgeTwo(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}

/*
  Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

  Сделайте два варианта функции checkAge:

  Используя оператор ?
  Используя оператор ||
*/

// 1
function checkAgeTwoTest(age) {
  return age > 18 ? true : "Родители разрешили?";
}

console.log(checkAgeTwoTest(19));

// 2
function checkAgeTwoTestOne(age) {
  return age > 18 || "Родители разрешили?";
}

console.log(checkAgeTwoTestOne(18));

// 3) Функция min(a, b)
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
  return a > b ? b : a;
}

console.log(min(5, 5));

// 4) Функция pow(x,n)
// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

function pow(a, b) {
  return a ** b;
}

let a = 3;
let b = 0;

if (b > 1 && b % 1 == 0) {
  console.log(pow(a, b));
} else {
  console.log("Степерь не поддерживается");
}
