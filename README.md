# REACT

## Компонент

Компоненты бывают:

- Классовые - применялись больше в прошлых версиях, чем сейчас
- Функциональные - популярны сегодня

Имя компонента должно начинаться с заглавного буквы **AppHello()**:

```js
import ReactDOM from 'react-dom/client';
function AppHello() {
    return <h1>Hello World</h1>;
}

ReactDOM.render(<AppHello />, document.getElementById('root'));
```

В точке входа src/index.js создается корневой функциональный компонент, который передается для рендеринга JSX вставки с надписью “Hello world!” в главном блочном элементе сайта с классом root, с помощью объектной модели ReactDOM и го метода render. Вторым параметром передается главный DOM-элемент браузера, в котором и будет отрисован переданный компонент.

## JSX

**JSX** (JS XML) - это вставка кода внутри компонента, напоминающего HTML.

Помимо тегов, синтаксис поддерживает атрибуты схожие с HTML, кроме class, вместо которого в JSX используют className.

Атрибуты (пропсы) могут быть и у самих компонентов:

```js
<AppHello name="Alex"/>
```

Таким образом переданные атрибуты будут доступны в объекте **props**, позволяя обмениваться данными между компонентами (от родительских к дочерним).

Внутри JSX обращение к пропсам и переменным осуществляется с помощью фигурных скобок:

```js
<span>{variable}</span>.
```

## Чистые функции

Компоненты делятся:

- презентационные (глупые или dummy), служат только для отображения
переданных им данных, как правило, являются функциональными компонентами и чистыми функциями.
- контейнеры, содержат логику, обрабатывают полученные данные, отправляют запросы и др.

**Чистая функция** - не имеет побочных эффектов (т.е., не изменяющая
переменные во внешней области видимости, не отправляющая запросы и т.п.), зависит только от переданных аргументов.

## Приложения в React

Создать приложение с помощью команды:

```bash
npx create-react-app my-app
cd my-app
npm start
```

В результате будет создана структура попок и файлов.
Исходный код проекта лежит в папке src
Точкой входа служит корневой компонент root, расположенный в файле index.js.
В него импортируются дочерние компоненты, в частности App() из файла App.js.
Пользовательские компоненты принято размещать в одноименных файлах в папке src/components.

## Стили

### Инлайн


```js
function App(props) {
    return (
        <div style={{paddingTop: '25px'}}>
        Inline Styles
        </div>
    );
}
```

Ключи стилей в отличие от css, использую camelCase вместо kebab-case
Если значение свойства не является числом, его следует передать как строку

Внутри атрибутов className и style можем использовать вычисляемые свойства:

```js
import './App.css';
function App(props) {
    return (
        <div>
            <header className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`} style={{ top: props.topPosition || '10px' }} > My First React App
                <h3>Hello, {props.name}</h3>
            </header>
        </div>
    );
}
export default App;
```

**Важно:**
При использовании CRA форматы css и less поддерживаются по умолчанию.
Для использования sass необходимо установить node-sass:

```bash
npm install node-sass --save
```

## Sate

Стейт (state) - специальная переменная, сохраняющая переданное ей значение внутри компонента.

В классовых компонентах, стейт является объектом наследуемым от суперкласса React.Component. 
В данный объект можно поместить множество переменных, т.е. использовать в качестве хранилища состояний данных, которые при изменение будут обновляться в компоненте, и следовательно во всем приложении.

Пример стейта в классовом компоненте:

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        { id: 1, firstname: 'Max', lastname: 'Mustermann', age: 25, isHappy: true },
        { id: 2, firstname: 'Cat', lastname: 'Putt', age: 35, isHappy: true },
        { id: 3, firstname: 'Bob', lastname: 'Prett', age: 15, isHappy: true },
        { id: 4, firstname: 'Alice', lastname: 'Smith', age: 45, isHappy: false },
        { id: 5, firstname: 'Dmiry', lastname: 'Volkov', age: 85, isHappy: true }
      ]
    }
```

В функциональных компонентах нет конструкторов, для этого и были созданы специальный механизмы,
которые называют хуки (зацепка), с помощью которых можно из фукнкций изменять объекты, все хуки начинаются со слова use.
useState хук для манипуляции стейтами:

```js
import React, { useState } from 'react';
export function Counter() {
const [count, setCount] = useState(0);
    return (
        <div>
        <span className="counter">{count}</span>
            <button className="counter-button">Click!</button>
        </div>
    );
}
export default Counter;
```

Функция useState(), которую нужно импортировать из библиотеки React, в качестве аргумента принимает значение для стейта.
Возвращаемый массив (кортеж), с помощью деструктуризации, сохраняет значения из объекта стейта в две переменные:

1. Любое имя стейта со стартовым значением
2. Функция-сеттер для изменения данного стейта. Ее принято называть как и сеттер, но с приставкой set.

Деструктурировать в переменные из массива можно еще одним способом:

```js
const countState = useState(0);
const count = countState[0];
const setCount = countState[1];
```

Увеличить счетчик можно так:

```js
function Count() {
    let [count, setCount] = useState(0)
    return ( 
        <div>
            <h3>{count}</h3>
            <br />
            <button onClick={() => setCount(prev => ++prev)}>count + 1</button>
        </div>
     );
}
```

Либо с помощью специальной объявленной функции:

```js
function Counter() {
    const [count, setCount] = useState(0);
    const updateCount = () => { 
        setCount(count+1)
    }
    return ( 
        <div>
            <span>
                {count}
            </span>
            <br />
            <button onClick={updateCount}>
                click + 1
            </button>
        </div>
     );
}
```

Жизненный цикл реакта:


