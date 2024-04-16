# AhmedTour

Наш проект решает множество проблем с поиском незабываемых туров по Северному Кавказу.

В регионе Северо-Кавказского федерального округа действительно недостаточно сервисов, предоставляющих возможность удаленной покупки экскурсий. Наш сайт приносит удобство и доступность, предоставляя пользователям простой и эффективный способ планирования и приобретения увлекательных путешествий.

Мы создали приложение которое позволяет удаленно приобрести тур, оставить комментарии.

# Как запустить проект:

1. После открытия проекта в Visual Studio Code запустите 2 терминала.
2. Далее в обоих терминалах сделайте команду cd AhmedTour/
3. В 1 терминале сделайте cd client , а во 2 cd server
4. Зайдите в папку server и создайте файл .env
5. Скопируйте то, что находится в файле .env.example и вставьте в файл .env
6. Поменяйте в строке DB_NAME postgres на свое название.
7. Поменяйте в строке DB_USER postgres на свой ник.
8. Поменяйте в строке DB_HOST host на localhost.
9. Поменяйте в строке DB_PASS pass на свой пароль.
10. Сделайте в обоих терминалах npm i
11. Во 2 терминале запустите команду npm run db, которая создаст базу данных.
12. Далее в 1 терминале запустите команду npm run dev, а во втором npm start
13. В первом терминале появится ссылка на localhost, зажмите ctrl и нажмите на эту ссылку.

Вы попали на наш сайт!

# Функционал нашего сайта:

1. На главной странице вас приветствует видео с замечательными видами и небольшим описанием. Чуть ниже находится карусель с регионами, можно нажать на любой регион и вы перейдете на страницу туров этого региона.
2. Каждый тур можно посмотреть подробнее, нажав на кнопку.
3. На этой странице представлено полное описание тура и присутствует кнопка купить тур, но нажав на нее, у вас появится модальное окно, чтобы зарегистрироваться, потому что оплату можно произвести только после регистрации.
4. После того, как вы зарегистрируетесь у вас появится окно с добавлением комментария и теперь, вы можете приобрести тур.
5. Вы можете перейти на страницу любого другого тура через выпадающий список и добавить любой или несколько туров в корзину. После добавления тура в корзину, кнопка становится не рабочей, так как на одного человека можно купить только один тур.
6. Далее можно перейти в корзину, в которой находятся все понравившиеся туры, там выможете удалить или купить тур.
7. Также внизу находится виджет telegram, можете нажать на него, и вы перейдете в телеграм бот.

Это весь функционал сайта, если зайти под обычным пользователем.

# Вход под админом:

1. Откройте модальное окно для входа, и в окне почта введите admin@admin, а в окне пароль введите 1.
2. Вы зашли под админом.
3. Вы можете удалить и изменить любой тур.
4. Вы можете увидеть историю покупки туров.
5. Также там есть модальное окно для добавления тура, но к сожалению оно не работает.

# Дальнейшее развитие проекта:

1. Добавление оценок туров.
2. Чат с клиентами.
3. Бронирование тура.
4. Возможность оплачивать несколько туров сразу.
5. Возможность на странице админа добавлять туры с картинками.

Спасибо, что посмотрели наш проект!