import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import MessagesList from "./components/MessagesList";
function App() {
  return (
    <>
    <Greeting name="Vlad"/>
    <Greeting name="Alex"/>
    <Counter/>
    <MessagesList/>
    </>
  );
}
export default App;
