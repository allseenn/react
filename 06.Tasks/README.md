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
    src --> actions
    actions --> productActions["productActions.js"]
    src --> App["App.js"]
    src --> components
    components --> ProductEdit["ProductEdit.js"]
    components --> ProductForm["ProductForm.js"]
    components --> ProductList["ProductList.js"]
    src --> indexCSS["index.css"]
    src --> indexJS["index.js"]
    src --> reducers
    reducers --> productReducer["productReducer.js"]
    src --> store
    store --> storeIndex["index.js"]

    click productActions href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/actions/productActions.js"
    click App href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/App.js"
    click ProductEdit href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/components/ProductEdit.js"
    click ProductForm href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/components/ProductForm.js"
    click ProductList href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/components/ProductList.js"
    click indexCSS href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/index.css"
    click indexJS href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/index.js"
    click productReducer href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/reducers/productReducer.js"
    click storeIndex href "https://github.com/allseenn/react/blob/main/06.Tasks/app/src/store/index.js"
```
