const BasicComponent = (props: { children: JSX.Element | null }) =>
  props.children;

function App() {
  // In this file, we already have two core concepts of React: components and JSX.
  // Moving forward, we will use JSX to describe the UI and see how the raw React apis translate to this abstraction.
  // JSX is a syntax extension to JavaScript.
  // It is similar to html but it has the full power of JavaScript.
  // It also has its own syntax rules and restrictions.

  // A basic React element is created either by calling React.createElement() or by enclosing content inside JSX tags. And this is different from a component.
  const element = <h1>Hello Modus</h1>;
  // A component is a function or a class that optionally accepts inputs (called “props”) and returns a React node.
  // The component function should be named with a capital letter. This is because React treats components starting with lowercase letters as DOM tags.
  // The component function should also be a pure function. It should not have any side effects.
  // The retrun value of the component should describe how a section of the UI should appear.
  // Curly braces are used to embed JavaScript expressions in JSX.
  return <BasicComponent>{element}</BasicComponent>;
}

export default App;
