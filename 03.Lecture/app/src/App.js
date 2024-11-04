import Parent from "./components/Parent";
import InputForm from "./components/InputForm";
import Nav from "./components/Menu";
import HoverRating from "./components/Rating";
import List from "./components/List";
import Student from "./components/Student";
function App() {
  return (
    <div>
      <HoverRating/>
      <Nav />
      <Parent/>
      <InputForm/>
      <List/>
      <Student name="John" age={30} isStudent={true}/>
    </div>
  );
}
export default App;
