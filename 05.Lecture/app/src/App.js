function App() {
  return (
    <>
      <GrandParent />
    </>
  );
}

function GrandParent() {
  return <Parent message="Hello from top" />
}

function Parent(props) {
  return <Child message={props.message} />
}

function Child(props) {
  return <GrandChild message={props.message} />
}

function GrandChild(props) {
  return <span>{props.message}</span>
}

export default App;
