// Каким будет результат этих выражений?

5 > 4; //    true ( 5 - больше)  [+]
"ананас" > "яблоко"; // false (я - больше(посимвольно))  [+]
"2" > "12"; //   true (посимвольное (к числу приводится, если есть число))    [-]
undefined == null; //  true ( Спец. правило языка. => просто надо знать. Равны только при нестрогом сравнении)    [-]
undefined === null; // false (разные типы)    [+]
null == "\n0\n"; //    false (при нестрогом сравнении null равен только undefined)   [-]
null === +"\n0\n"; //    false (Без преобразования, но + сделал правый операнд числом,)   [+]
//  (но null !== 0 тк разные типы)

// Верно = 4 неверно 3
