// 1) Преобразуйте объект в JSON, а затем обратно в обычный объект
let user = {
  name: "Василий Иванович",
  age: 35,
};

let toJSON = JSON.stringify(user);
let fromJSON = JSON.parse(toJSON);

console.log(toJSON); // {"name":"Василий Иванович","age":35}
console.log(fromJSON); // { name: 'Василий Иванович', age: 35 }

// CHAT GPT
// 2) Парсинг JSON

const json = `[
  {"name":"apple","color":"red","weight":"100"},
  {"name":"banana","color":"yellow","weight":"200"},
  {"name":"orange","color":"orange","weight":"120"}
]`; // JSON - строка

const fromJSON2 = JSON.parse(json); // Массив объектов

console.log(fromJSON2);

// 3) Распарсить и вывести инфо о фильмах в консоль.

const moviesJSON = `[
  {
      "title": "The Shawshank Redemption",
      "release_year": 1994,
      "director": "Frank Darabont",
      "genre": ["drama", "crime"],
      "main_actors": ["Tim Robbins", "Morgan Freeman"]
  },
  {
      "title": "The Green Mile",
      "release_year": 1999,
      "director": "Frank Darabont",
      "genre": ["drama", "fantasy"],
      "main_actors": ["Tom Hanks", "Michael Clarke Duncan"]
  },
  {
      "title": "Forrest Gump",
      "release_year": 1994,
      "director": "Robert Zemeckis",
      "genre": ["drama", "romance"],
      "main_actors": ["Tom Hanks", "Robin Wright"]
  }
]`;

JSON.parse(moviesJSON).forEach((item) => {
  // Пробегаемся и выводим в консольку поля фильма
  console.log(`Movie: ${item.title}
  Director: ${item.director}
  Year: ${item.release_year}
  Genre: ${item.genre.join(", ")}
  Main actors: ${item.main_actors.join(", ")}
  `);
});

const obj2 = `{
  "name": "vova",
  "age": 15,
  "isAdmin": true
}`;

const backToObj = JSON.parse(obj2);

console.log(typeof backToObj.isAdmin);
