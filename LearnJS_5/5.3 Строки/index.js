let str = "Hello world";

console.log(str.substr(2, 7)); // llo wor (со 2 на длину 7)

/*
  Значение первого аргумента может быть отрицательным, тогда позиция определяется с конца:
*/

console.log(str.substr(-5, 2)); // wo (-5 символ и длина 2)
