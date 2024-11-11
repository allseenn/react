# Урок 5. 

## Компоненты высшего порядка знакомство с Redux

Приложение для переключения темы сайта
Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта.

Функционал:

- Action types: TOGGLE_THEME.
- Actions: Создайте действие для переключения темы.
- Reducer: Реализуйте редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения.
- Component: Создайте компонент, который отображает переключатель для изменения темы сайта.


Описание:

- Состояние: Для хранения текущей темы можно использовать логическую переменную (true для темной темы и false для светлой) или строку ("dark" или "light").

- Интерфейс: Ваш интерфейс может состоять из переключателя, который изменяет тему с светлой на темную и обратно.

## Решение

app/src
├── actions
│   └── [themeActions.js](./app/src/actions/themeActions.js)
├── components
│   └── [ThemeToggle.js](./app/src/components/ThemeToggle.js)
├── reducers
│   └── [themeReducer.js](./app/src/reducers/themeReducer.js)
├── [App.js](./app/src/App.js)
├── [index.css](./app/src/index.css)
├── [index.js](./app/src/index.js)
└── [store.js](./app/src/store.js)


```mermaid
flowchart TD
    A[app/src] --> B[actions]
    B --> C[[themeActions.js]]
    C:::file

    A --> D[components]
    D --> E[[ThemeToggle.js]]
    E:::file

    A --> F[reducers]
    F --> G[[themeReducer.js]]
    G:::file

    A --> H[[App.js]]
    H:::file

    A --> I[[index.css]]
    I:::file

    A --> J[[index.js]]
    J:::file

    A --> K[[store.js]]
    K:::file

    %% Добавляем ссылки к каждому узлу
    click C "./app/src/actions/themeActions.js" "Перейти к themeActions.js"
    click E "./app/src/components/ThemeToggle.js" "Перейти к ThemeToggle.js"
    click G "./app/src/reducers/themeReducer.js" "Перейти к themeReducer.js"
    click H "./app/src/App.js" "Перейти к App.js"
    click I "./app/src/index.css" "Перейти к index.css"
    click J "./app/src/index.js" "Перейти к index.js"
    click K "./app/src/store.js" "Перейти к store.js"

    %% Стили для файлов
    classDef file fill:#f9f9f9,stroke:#007bff,stroke-width:2px,corner-radius:5px;
```

