# Урок 7

## Redux middlewares. Redux persist

Имитация асинхронной загрузки и отображения списка задач из локального хранилища.

1. Инициализация проекта и установка зависимостей: Инициализируйте новый проект React . Установите @reduxjs/toolkit и react-redux.

2. Создание локальных данных: Определите массив объектов, представляющих задачи, в файле, например, src/data/tasks.js. Каждая задача может содержать поля, такие как id, title и completed.

3. Настройка Redux store: Создайте Redux store с использованием configureStore из @reduxjs/toolkit. Используйте Redux Thunk middleware, уже включённый в @reduxjs/toolkit.

4. Создание асинхронного действия с использованием Thunk: Используйте createAsyncThunk для создания асинхронного действия, которое "загружает" данные задач из локального файла. Хотя данные и локальные, имитируйте асинхронное поведение, например, с использованием setTimeout.

5. Работа с компонентом: Используйте хуки useDispatch и useSelector в компоненте для диспетчеризации асинхронного действия и выборки списка задач из состояния. Выведите список задач.

## Решение

```mermaid
graph TD
    A[index.js] --> B[index.css]
    A --> C[App.js]
    A --> D[store]
    D --> E[store.js]
    D --> F[tasksSlice.js]
    A --> G[data]
    G --> H[tasks.js]
    A --> I[reducers]

    click A href "https://github.com/allseenn/react/blob/main/07.Tasks/app/src/index.js" "index.js"
    click B href "https://github.com/allseenn/react/blob/main/07.Tasks/app/src/index.css" "index.css"
    click C href "https://github.com/allseenn/react/blob/main/07.Tasks/app/src/App.js" "App.js"
    click E href "https://github.com/allseenn/react/blob/main/07.Tasks/app/src/store/store.js" "store.js"
    click F href "https://github.com/allseenn/react/blob/main/07.Tasks/app/src/store/tasksSlice.js" "tasksSlice.js"
    click H href "https://github.com/allseenn/react/blob/main/07.Tasks/app/src/data/tasks.js" "tasks.js"

```

