# GIT

<h2>Что такое GIT?</h2>

- [ ] `Git` - это распределенная система контроля версий, которая обеспечивает эффективное управление изменениями в исходном коде проекта и облегчает совместную работу над проектами.
- [ ] Система контроля версий - это система, которая записывает изменения в файлы в течение времени, чтобы вы могли вернуться к определенным версиям позже, если это необходимо.

<hr>
<br>
<br>

<h2>Ветки и слияния</h2>

- [ ] Главная (актуальная) ветка.
- [ ] Для работы необходимо создать новую ветрку (branch) на основе главной (актуальной).
- [ ] После происходит слияние веток (merge). Как с главной так и с остальными.

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/1ec8ddd7-e3cc-48b1-b746-f35045628fcf)

<hr>
<br>
<br>

<h2>Как создать ветку и работать в проекте</h2>

- [ ] `git clone <link>` - клонирование проекта. По умолчанию будет главная ветка.
- [ ] `git branch <имя>` - для создания новой ветки.
- [ ] `git checkout <имя>` - переключится на нужную (созданную) ветку.

<br>
    + `Pull request` - запрос на предложение изменений из нашей ветки в основную (для ревью)

- [ ] `git push origin <имя ветки>` - загрузить изменения на удаленный реп

<hr>
<br>
<br>

<h2>Слияние</h2>

- [ ] Выбрать ветку, в которую надо добавить изменение - `git checkout <название_целевой_ветки>`
- [ ] Выполнить команду `merge`, указав имя ветки - `git merge <название_ветки_для_слияния>` или `git merge main`(если главная)

<hr>
<br>
<br>

<h2>Конфликты</h2>

- [ ] `Merge conflict` - конфликт слияния - происходит, когда несколько разработчиков внесли в один кусок кода в разных ветках.

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/029f361a-5e5c-4e62-97ff-b1a2115e07a6)

<br>

<h3>Как решить merge conflict?</h3>

+ Перед работой получить последние изменения командой `git pull`
+ В ручную решить конфликт. Разработчик должен вмешаться, решив, какие изменения должны быть сохранены, а какие отклонены. Для этого нужно редактировать файлы вручную, удалять маркеры конфликта и сохранять изменения.
+ Добавить изменения `git add`
+ Завершить `merge` - `git merge --continue`

<hr>
<br>
<br>

<h2>Основные понятия и терминология</h2>

+ `Репозиторий`: Это хранилище вашего кода и истории его изменений. Git репозиторий включает все коммиты и ветки вашего проекта.
+ `Коммит (commit)`: Коммит представляет собой запись в истории изменений вашего репозитория. Каждый коммит содержит снимок всех файлов в проекте, автора изменений, сообщение с описанием изменений и указатель на предыдущий(ые) коммит(ы), что позволяет восстановить историю изменений.
+ `Ветка (branch)`: Ветвление позволяет отделять новые задачи от основной (master или main) линии разработки. Это означает, что вы можете работать над новыми функциями или исправлениями без влияния на основной код.
+ `Слияние (merge)`: Процесс слияния включает в себя объединение изменений из одной ветки в другую. Это часто происходит, когда функция разработана отдельно и затем интегрируется в основную ветку.
+ `Перебазирование (rebase)`: Rebase — это другой способ интеграции изменений из одной ветки в другую. Он переносит коммиты из одной ветки на вершину другой, что приводит к линейной истории.
