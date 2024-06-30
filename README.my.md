1. створюємо новий репозиторій (з нашим проектом) на github (gitignore та readme
   не додаємо);

2. скачуємо parcel;

3. переназиваємо папку parcel на ім'я нашего проекта (наприклад goit-js-hw-08);
   Відкриваємо проект в vs code

4. перепідв'язуємо наш репозиторій: git remote -v (вкаже на який репозиторій ми
   зараз посилаєось (на parcel)); git remote set-url origin 'посилання на наш
   репозиторій'; перевіряємо git remote -v;

5. Закриваємо vs code, видаляємо папку src; скачуємо папку src з проекту і
   вставляємо замість видаленної;

6. Налаштовуємо Деплой: в папці package.json форматуємо поля "homepage":
   "https://your_username.github.io/your_repo_name/", та "scripts": { "build":
   "parcel build src/\*.html --public-url /your_repo_name/" };
   Напр.("https://NataliaStupka.github.io/goit-js-repeat-hw-09") та ("parcel
   build src/\*.html --public-url /goit-js-repeat-hw-09/")

7. встановлюємо всі залежності пакету npm i (або npm install);

8. npm start запускаємо;

9. Виконуємо наші завдання, прописуємо код;

10. підготовка репозиторію: Settings -> Actions -> Generals -> скролимо до низу
    виставляємо галочки на +Read and write permision та +Allow GitHub...;
    Зберігаємо

11. Слідкуємо, щоб гілка була "main" в GitHub Desctop;

    12.Після першого коміта (push), перевіряємо чи все пройшло. Як так, то
    автоматично з'явиться ще одна гілка gh-pages.

    13.Settings -> Pages -> (обираємо з якої гілки будемо створювати нашу
    сторінку), з gh-pages (тому що тут лежать мініфіковані файли) -> Save;

//============================================================= //
