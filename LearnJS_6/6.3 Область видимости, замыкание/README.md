# Область видимости переменных, замыкание

<h2>Блоки кода</h2>

- [ ] Если переменная объявлена внутри блока кода {...}, то она видна только внутри этого блока.

```typescript
  {
    // Локальная переменная
    let message: string = "Hello world"; // переменная видна только в этом блоке
  
    console.log(message); // OK
  }
  
  console.log(message); // message is not defined
```

<br>

- [ ] Для `if`, `for`, `while` и т.д. переменные, объявленные в блоке кода `{...}`, также видны только внутри:

```typescript
  if (true) {
    let phrase: string = "Hello";
  
    console.log(phrase); // Hello
  }
  
  console.log(phrase); // Ошибка, нет такой переменной!
```

<hr>
<br>
<br>

<h2>Вложенные функции</h2>

