// Объект с вложенным св-м
const testObj = {
  name: "Sasha",
  age: 15,
  size: {
    width: 50,
    height: 50,
  },
};

// Клонирорвание
const clone = JSON.parse(JSON.stringify(testObj));

// Изменяем копию
clone.size.border = 2;

console.log(testObj); // - { name: 'Sasha', age: 15, size: { width: 50, height: 50 } }
console.log(clone); // - { name: 'Sasha', age: 15, size: { width: 50, height: 50, border: 2 } }
