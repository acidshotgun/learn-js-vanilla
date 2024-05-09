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

- [ ] В методах объекта контекст `this` ссылается на объект, в контексте которого была вызвана функция.

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/71aa41a4-1355-47f8-ada2-1309bc0dd0d4)

- [x] Тут есть определенные нюансы с потерей контекста:

  <br>
       
    <h3>+ Обычная функция внутри метода</h3>

    - [ ] Если обычная ф-я будет вызвана внутри метода объекта, то то вызов ощуествляется без привязки контекста (контекст теряется).
    - [ ] Логика будет работать как с вызовом обычной ф-ии => т.е. такая ф-я будет ссылаться на глобальный объект с правилами `use strict`.
     
      + Логика будет со всеми правилами `use strict`
         
      ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/792f9d37-8459-41ae-bb44-1d346e97e7f8)

      ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/51607b20-79dd-4c52-96c0-93c95b20281a)

    <br>

    - [ ] Та же проблема внутри методов, которые в кач-ве колбэка используют `function decloration`

      + Поскольку колбэк - это ф-я, то использование ее как `function decloration` внутри метода будет приводить к поведению описанному выше - функция внутри метода.
      + Соответственно такая ф-я будет ссылкаться на `global / window` по правилам `use strict`
         
      ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/635b6f9b-e491-4467-84fd-8447bc271328)

      + И ошибка с `usestrict`, тк пытаемся вызвать `undefined.model`
         
      ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/db29cd7e-224b-4aa3-860c-0582c8a49a3d)

  <br>
       
    <h3>+ Обычная функция внутри таймаута</h3>

    - [ ] Та же самая ситуация с таймаутом, если использовать `function decloration` как колбэк внутри таймаута.
       
      + Поведение => обычная ф-я внутри метода.
         
      ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/09396827-af5d-4983-b0d2-369cedea619d)

<hr>
<br>
<br>

<h2>4. this в функциях конструкторах</h2>

- [ ] Когда ф-я конструктор вызывается при помощи оператора `new` - контекст `this` будет ссылаться на экземпляр созданного объекта.

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/46fe5b1f-9354-4e0f-9514-61c9d3df518b)

<hr>
<br>
<br>

<h2>5. this в стрелочных функциях</h2>      

- [ ] `Стрелочная ф-я` не имеет собственного контекста `this`. Она берет его у `внешней` обычной функции
- [ ] Если внешней функции нет - ведет себя так, как будто создана в глобальном контексте `window / global`

  + Причем `use strict` на это никак не влияет абсолютно.
     
![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/f2c88302-4df4-44e5-aeda-1899424526a5)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/56cb52d8-6ed1-4f4e-8cae-89545debaa56)
  


    
