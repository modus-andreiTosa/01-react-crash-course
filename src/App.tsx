const BasicComponent = (props: { children: JSX.Element | null }) =>
  props.children;

function App() {
  const element = <h1>Hello Modus</h1>;
  return <BasicComponent>{element}</BasicComponent>;
}

export default App;
