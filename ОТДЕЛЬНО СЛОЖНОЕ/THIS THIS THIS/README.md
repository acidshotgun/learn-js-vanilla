# THIS в JS.

- [x] `this` - ключевое слово, которое ссылается на текущий контекст выполнения кода. 

<hr>
<br>
<br>

<h2>1. this в глобальном объекте</h2>

- [ ] `this` на верхнем уровне всегда ссылается на `window` или `global` для `node.js`.

  + `window` или `global` - ВСЕГДА!!!
  + `use strict` тут роли не играет никакой!!!

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/e0622cf5-9a63-4f9e-ab55-4a2d8ffcb121)
  
  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/9cfdd02b-cdee-43c5-838d-248fa9539b6a)

<hr>
<br>
<br>

<h2>2. this в обычных ф-ях</h2>

- [ ] `this` в обычных ф-ях зависит от того, в каком контексте вызвана ф-я.

- [ ] Влияет `use strict`:

  + С `use strict` => `undefined`
  + Без `use strict` => `global / window`
     
  <br>
     
  <h3>+ Обычная функция</h3>

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/60b2ce37-5e79-4e99-ae41-536cd0b7fae5)

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/bd79b10b-4e97-4515-8bd5-23238dc2b7fd)

  <br>

  <h3>+ Функция внутри функции</h3>

  - [ ] Вызов ф-ии внутри ф-ии `(если это не метод объекта)` сути не меняет.
  - [ ] Логика такая же как и обычные вызовы ф-ии, с такими же правилами `use strict`
     
  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/bb401204-4026-46ca-af3b-b539aa63abe6)

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/a286aad2-d5a0-46cf-a6ad-b583bed275b5)

<hr>
<br>
<br>

<h2>3. this в методах объекта</h2>

