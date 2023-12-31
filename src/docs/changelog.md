# Список изменений

## Версия 2023.11.0 (от 07.11.2023)

### :new: Добавлено

* Минималистичная русская рулетка;
* Лидеры по победам, поражениям и сыгранным игр;
* Индивидуальная статистика по играм на двоих;

## Версия 2023.8.0 (от 16.08.2023)

### :new: Добавлено

* Опция `играть_в_ветке` для игры в приватных ветках для игр на 2-5 игроков;
* Стата `Активные пользователи` в /стат;
* Перезапуск игр на одного;
* Досрочное начало игр для 2-5 игроков;
* Команда /бонус, /бонус_удалить, /бонусы;

### :recycle: Изменено

* Изменена вся архитектура бота;
* Улучшена производительность;

### :bug: Исправлено

* Ошибка при вводе /бродилка и /суматоха;

### :x: Удалено

* Стата `Пользователи` в /стат;
* Афигенная куча старого и неактуального кода;
* Мультиплеер на крестики-нолики;

## Версия 2023.5.0 (от 09.05.2023)

### :new: Добавлено

* Эксперементальный мультиплеер на крестики-нолики;

### :recycle: Изменено

* Полность переписан сам бот;

## Версия 2023.3.0 (от 01.03.2023)

### :new: Добавлено

* Игра восхождение;

### :bug: Исправлено

* В найди пару при выборе каждого элемента была "Ошибка взаимодействия";
* Лабиринт можно было пройти, постоянно нажимая на центральную кнопку;

## Патч (от 04.02.2023)

### :bug: Исправлено

* Исправлен баг в лабиринте;

## Версия 2023.2.0 (от 28.01.2023 )

### :new: Добавлено

* Игра суматоха;
* Игра бродилка;

### :recycle: Изменено

* Изменен дизайн бота в некоторых местах;

## Патч (от 21.01.2023)

### :bug: Исправлено

* Можно было пригласить в играх на двоих пользователя, которого нет на сервере;

## Версия 2023.1.0 (от 08.01.2023)

:::tip
Проект был заморожен в период с 16.11.2022 до 08.01.2023, для истории сюда заметку кину,
:::

### :new: Добавлено

* Поддержка раундов во всех играх на двоих;
* Исправлен баг в игре в слова;
* Осколки бота;

### :recycle: Изменено

* В играх на двоих было добавлено время на каждую игру;
* Полностью переписан движок игр и сам бот;

### :x: Удалено

* Большинство старого функционала;

## Версия 2.0 (от 31.10.2022)

### :new: Добавлено
* Категория Империи;
* Статистика игр;

### :recycle: Изменения
* В игре в слова теперь будет бот отправлять вам сообщение, если вы не угадали слово;
* В этой же игре был добавлен учет регистра;
* В команде /porf был добавлен некоторый фильтр слов;

## Версия 1.2.1 (от 25.09.2022)

### :new: Добавлено

* Игра "Взлом пароля";

### :recycle: Изменения

* Для удобства была добавлена мобильная версия в "Сапер" и "Найди пару", также вы можете сменить версию в опции version в командах данных игр;
* В некоторых местах добавлены вложения (Embed's);
* В игре "Найди пару" теперь время прохождение выводиться не в минутах, а в секундах;

### :bug: Исправлено
* В команде /porf не работали задержки;
* В игре "Найди пару" при нажатии одного и того же предмета была "Ошибка взаимодействия";

## Версия 1.2 (от 18.09.2022)

### :new: Добавлено

* Команда /random;
* Команда /donate;
* Счет серверов, пользователей на мониторингах SDC и BotiCord;
* Для премиальных пользователей добавлено:
  * Снижение перезарядки команд в 2 раза;
  * Максимально настраиваемый уровень в играх - 25;

### :recycle: Изменения

* В данных играх добавлена кастомизация кол-во уровней:
  * "Восхождение на гору";
  * "Лабиринт";
  * Минимально настраиваемый уровень - 2;

* В игре "Найди пару" добавлен вывод времени прохождения игры;
* Редизайн отдельных элементов в боте;

### :bug: Исправлено
* Исправлен баг в игре "Восхождение на гору", когда попадался тупик, то игрок переходил на следующий этаж;

## Версия 1.1.1 (от 03.09.2022)

### :bug: Исправлено

* Команда /hide_and_seek не регистрировалась;

## Версия 1.1 (от 31.08.2022)

### :new: Добавлено

* Игра найди пару;
* Игра восхождение;

### :recycle: Изменено

* В игре в слова теперь не будет отправляться сообщения о том, что кто-то неверно отгадал слово;

### :x: Удалено

* Удалена вся категория Утилиты, теперь бот полностью игровой;
* Счет серверов на мониторингах SDC & Boticord;

## Версия 1.0.X (от XX.08.2022)

::: tip
Опять таки точной даты и даже версии нет (возможно я делал патч).
:::

### :new: Добавлено

* Крестики-нолики;

### :bug: Исправлено

* Баг с определением победителя в крестиках-ноликах;

## Версия 1.0 (от 19-20.07.2022)

::: tip
Точная дата мне даже не известна, уже и не помню.
:::

### :new: Добавлено

* Лабиринт;
* Угадай число;
* Игральная кость;
* Прятки;
