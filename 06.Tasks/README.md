# Урок 6

## Погружение в Redux. Connect

Разработать приложение для управления каталогом продуктов, позволяющее добавлять, удалять, отображать и редактировать продукты.

Настройка Redux Store:

- Используйте configureStore из @reduxjs/toolkit для создания хранилища.
- Определите начальное состояние и создайте слайс с использованием createSlice для продуктов. Каждый продукт должен иметь id, name, description, price, и available.

- В слайсе определите редьюсеры и действия для добавления нового продукта, удаления продукта по ID, обновления продукта и изменения его доступности.

Компоненты React:


Компонент для добавления продукта:
- Создайте форму, позволяющую пользователям вводить данные нового продукта (имя, описание, цена, доступность) и добавлять его в каталог.

Компонент для отображения продуктов:
- Разработайте компонент, который отображает список всех продуктов с их атрибутами, а также кнопки для удаления продукта из каталога и переключения его доступности.

Компонент для редактирования продукта:
- предоставьте возможность редактирования существующих продуктов, чтобы можно было изменять их имя, описание, цену и доступность.

## Решение

```mermaid
flowchart TD
    A[src]
    A1[actions] --> A2[[productActions.js]]
    A --> A1
    A --> B[[App.js]]
    A --> C[components]
    C --> C1[[ProductEdit.js]]
    C --> C2[[ProductForm.js]]
    C --> C3[[ProductList.js]]
    A --> D[[index.css]]
    A --> E[[index.js]]
    A --> F[reducers]
    F --> F1[[productReducer.js]]
    A --> G[store]
    G --> G1[[index.js]]

    click A2 href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/actions/productActions.js"
    click B href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/App.js"
    click C1 href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/components/ProductEdit.js"
    click C2 href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/components/ProductForm.js"
    click C3 href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/components/ProductList.js"
    click D href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/index.css"
    click E href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/index.js"
    click F1 href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/reducers/productReducer.js"
    click G1 href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/store/index.js"
    ```
