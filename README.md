## Быстрый старт

```bash
# 1) Устанавливаем Node.js 20.x
nvm install 20
nvm use 20

# 2) Устанавливаем зависимости
npm install

# 3) Запускаем локальный dev-сервер
npm run dev

# 4) Открываем в браузере
http://localhost:3000
```

---

## Файловая структура

```perl
/
├── .data/               # cache, outputs (git-ignored)
├── .git/                # internal Git data
├── .nuxt/               # Nuxt build artifacts (git-ignored)
├── .output/             # Nitro/Nuxt generate outputs (git-ignored)
├── api/                 # (опционально) Nitro server handlers
├── assets/              # SCSS, шрифты, изображения для сборки
│    ├── fonts/
│    └── styles/
│         ├── base/
│         └── index.scss
├── components/
│    ├── ui/             # базовые UI-компоненты
│    │    └── Button.vue
│    └── icons/          # SVG-иконки как Vue-компоненты
│         └── Close.vue
├── composables/         # custom hooks (useFoo)
├── layouts/             # layout-шаблоны страниц
├── lib/                 # вспомогательные библиотеки/утилиты
├── node_modules/        # зависимости (git-ignored)
├── pages/               # маршруты Nuxt (file-based routing)
├── plugins/             # Nuxt плагины (vue-scrollto, motion-v и т.д.)
├── public/              # статические файлы, отдаются как-есть
│    ├── favicon.ico
│    ├── robots.txt
│    └── img/
├── server/              # серверный код (Nitro)
├── stores/              # Pinia-stores
├── utils/               # утилиты, helpers
├── .gitignore
├── .nvmrc               # версия Node.js для nvm
├── components.json      # список компонентов (опционально)
├── error.vue            # страница 404/500
├── nuxt.config.ts       # основная конфигурация Nuxt 3
├── package.json         # список скриптов и зависимостей
├── package-lock.json    # зафиксированные версии зависимостей
├── README.md
└── tsconfig.json        # TypeScript конфиг
```

---
## Нэйминг

- Формат имен файлов - **PascalCase**

- Формат названий констант - **SCREAM_CASE**

- Формат названий функций и переменных - **camelCase**

- Формат названий CSS селекторов - [БЭМ](https://ru.bem.info/methodology/css/)

- Формат использования тегов (компонентов) - **PascalCase** или **kebab-case**

---

## Конфигурация окружения

После установки репозитория необходимо добавить `.env` файл
Cодержимое `.env` можно попросить у актуального разработчика

---

## Автоимпорты компонентов

В Nuxt 3 все компоненты в `/components` автоматически регистрируются — без явных import/defineComponent.

### Примеры

```vue
<template>
  <!-- UI — кнопка без import -->
  <UiButton @click="doSomething">
    Сохранить
  </UiButton>

  <!-- Иконки -->
  <IconsClose class="w-4 h-4 text-gray-500" />
</template>

```
---

## Зависимости

| Пакет                    | Зачем нужен                             |
| ------------------------ | --------------------------------------- |
| `nuxt`                   | фреймворк Nuxt 3 (Vue SSR/SSG)          |
| `@nuxt/content`          | Markdown контент и статейный движок     |
| `@nuxtjs/color-mode`     | светлая/тёмная тема                     |
| `@pinia/nuxt`            | Pinia store                             |
| `@vueuse/core`           | полезные Vue-утилиты                    |
| `axios`                  | HTTP-клиент                             |
| `dayjs`                  | работа с датами                         |
| `lucide-vue-next`        | иконки Lucide                           |
| `maska`                  | маски для инпутов                       |
| `radix-vue`              | низкоуровневые accessible UI-компоненты |
| `sass`                   | препроцессор SCSS                       |
| `sortablejs`             | drag & drop сортировка                  |
| `swiper`                 | свайп-компоненты (carousel)             |
| `uuid`                   | генерация уникальных ID                 |
| `vee-validate` + `yup`   | валидация форм                          |
| `vue-toast-notification` | toast-уведомления                       |

---

## Комментирование кода

#### В каких случаях требуется комментирование кода:

- Объяснение цели или назначения определенного блока кода, если она не очевидна.

- Описание сложных алгоритмов или логики, которые могут быть сложно понятны для других разработчиков.

- Указание на предполагаемые ошибки или проблемы, которые могут возникнуть в коде.

- Описание намерений или целей разработчика при написании определенного фрагмента кода, если она не очевидна.

- Комментирование важных или критических частей кода для обеспечения понимания других разработчиков.

#### Пример, когда не стоит писать комментарий ❌:

```js
// Это объект, который представляет пользователя
const user = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com"
};
```

```js
// Функция для суммирования чисел
const add = (a, b) => a + b;
```

#### Но если мы создали `utils`, который помогает нам с суммированием, то описываем его следующим образом:

```js
/**
 * Функция для суммирования двух чисел.
 * @param a - Первое число для суммирования.
 * @param b - Второе число для суммирования.
 * @return {number} Сумма двух чисел.
 */
const add = (a, b) => {
    return a + b;
}
```
