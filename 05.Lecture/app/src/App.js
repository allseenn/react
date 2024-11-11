// import { createContext, useContext, useState} from 'react'

// Как было раньше
// function GrandParent() {
//   return <Parent message="Hello from top" />
// };


// function Parent({message}) {
//   return <Child message={message} />
// };


// function Child({message}) {
//   return <GrandChild message={message} />
// };

// function GrandGrandGrandChild({message}) {
//   return <h1>{message}</h1>
// };

// Создаем контекст
// const MessageContext = createContext();

// // Компонент GrandGrandGrandChild использует контекст
// function GrandGrandGrandChild() {
//   // Используем useContext для доступа к контексту
//   const message = useContext(MessageContext);

//   return <span>{message}</span>;
// }

// // Компонент GrandParent использует контекст
// function GrandParent() {
//   return (
//     <MessageContext.Provider value="Hello from the top Context">
//       <Parent />
//     </MessageContext.Provider>
//   );
// }

// // Компонент Parent передает контекст через пропсы
// function Parent() {
//   return <Child />
//   }

// // Компонент Child передает контекст дальше
// function Child() { 
//   return <GrandChild />
// }

// // Компонент GrandChild передает контекст на последний уровень
// function GrandChild() {
//   return <GrandGrandGrandChild />
// }

// // // ...

// // Корневой компонент
// function App() {
//   return (
//     <div>
//     <h1>Пример использования React.Context</h1>
//     <GrandParent />
//     </div>
//   );
// }


/// EX2
// Шаг 1:
// const ThemeContext = createContext();

// // Компонент, использующий контекст
// const ThemedButton = () => {
//   // Шар 2Ж Используем useContext для доступа к контексту
//   const theme = useContext(ThemeContext);

//   return (
//     <button style={{ background: theme.background, color: theme.foreground }}>
//       Themed button
//     </button>
//   );
// };

// // Компонент, который устанавливает контекст
// const App = () => {
//   // Шаг 3: Определяем состояние, которое будет передаваться через контекст
//   const [theme, setTheme] = useState({
//     background: 'lightgrey',
//     foreground: 'black',
//   });

// // Шаг 4: Создаем компоненты, которые должны использовать контекст, в провайдер контекста
//   return (
//     <ThemeContext.Provider value={theme}>
//       <div>
//         <h1>Использовать React.Context</h1>
//       <ThemedButton />
//       <button
//         onClick={() =>
//           setTheme({
//             background: 'black',
//             foreground: 'white',
//           })
//         }
//       >
//         Сменить тему
//       </button>
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// // EX3

// // Создаем контексты для темы и заметок
// const ThemeContext = createContext();
// const NotesContext = createContext();

// // Создаем пользовательские хуки для удобства использования контекстов
// const useTheme = () => useContext(ThemeContext);
// const useNotes = () => useContext(NotesContext);

// // Компонент, отображающий список заметок
// const NotesList = () => {
//   const {notes} = useNotes();
//   return (
//     <ul>
//       {notes.map((note, index) => (
//         <li key={index}>{note}</li>
//       ))}
//     </ul>
//   );
// };
 
// // Компонент, позволяющий добавлять заметки
// const NoteInput = () => {
//   const[inputValue, setInputValue] = useState('');
//   const { addNote } = useNotes();

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddNote = () => {
//     addNote(inputValue);
//     setInputValue('');
//   };

//   return (
//     <div>
//       <input value={inputValue} onChange={handleInputChange} />
//       <button onClick={handleAddNote}>Добавить заметку</button>
//     </div>
//   );
// };

// // Компонент для переключения темы
// const ThemeToggle = () => {
//   const { theme, toggleTheme } = useTheme();
//   return (
//     <button onClick={toggleTheme}>Нажми чтобы переключить на {theme === 'light' ? 'dark' : 'light'}</button>
//   );
// }


// const App = () => {
//   const [theme, setTheme] = useState('light');
//   const [notes, setNotes] = useState(['Элемент списка 1', 'Элемент списка 2']);

//   const toggleTheme = () => {
//     setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
//   };

//   const addNote = (note) => {
//     setNotes((prevNotes) => [...prevNotes, note]);
//   };

//   return (
//     <ThemeContext.Provider value={{theme, toggleTheme}}>
//       <NotesContext.Provider value={{ notes, addNote }}>
//         <div className='content' style={{ color: theme === 'light' ? 'black' : 'white', background: theme === 'light' ? 'white' : 'black', }}>
//       <h1>Список</h1>
//       <ThemeToggle />
//       <NotesList />
//       <NoteInput />
//       </div>
//       </NotesContext.Provider>
//       </ThemeContext.Provider>
//     );
// };

/// HOC компоненты высшего порядка

// // HOC для добавления стилей к компоненту
// const withStyle = (WrappedComponent, styles) => {
//   return (props) => {
//     const newProps = { ...props, styles };
//     return <WrappedComponent {...newProps} />;
//   };
// }

// // Компонент, который будет обернут в стили
// const Button = ({ styles }) => {
//   return (
//     <button style={styles}>
//     Click me
//     </button>
//   );
// }

// const Text = ({ styles }) => {
//   return (
//     <p style={styles}>
//     Text
//     </p>
//   );
// }

// // Используем HOC для добавления стилей к компоненту Button
// const Styledbutton = withStyle(Button, { background: 'blue', color: 'white' });
// const Styledbutton2 = withStyle(Button, { background: 'green', color: 'white' });
// const StyledText = withStyle(Text, { background: 'gray', color: 'black' });

// const App = () => {
//   return (
//     <div>
//       <h1>Пример использования HOC компоненты высшего порядка</h1>
//       <Styledbutton />
//       <Styledbutton2 />
//       <StyledText />
//     </div>
//   );
// }

//HOC для счетчика

// HOC для добавления счетчика к компоненту
// const withCounter = (WrappedComponent) => {
//   return (props) => {
//     const [count, setCount] = useState(0);

//     const incrementCount = () =>{
//         setCount(count + 1)
//      };

//      const newProps = { 
//       count, 
//       incrementCount, 
//       ...props 
//     };

//     return <WrappedComponent {...newProps} />;
//   };
// }; 

// // Компонент, который будет обернут в счетчик и другими пропрасами
// const ClickCounter = ({ count, incrementCount, message }) => {
//   return (
//     <div>
//       <h1>{message}</h1>
//       <button onClick={incrementCount}>Click me</button>
//       <p>Click {count} times</p>
//     </div>
//   )
// }

// // Используем HOC для добавления счетчика к компоненту ClickCounter и передаем другие пропсы
// const ClickCounterWithCounterAndProps = withCounter(ClickCounter);

// const App = () => {
//   return (
//     <div>
//       <h1>Пример использования HOC и другими пропсами</h1>
//       <ClickCounterWithCounterAndProps message="Счетчик кликов:" />
//       <ClickCounterWithCounterAndProps message="Счетчик новых кликов:" />
//     </div>
//   );
// };
// export default App

import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter.js'

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App