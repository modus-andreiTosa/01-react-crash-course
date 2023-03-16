import { createElement } from 'react';

type BasicComponentProps<T> = {
  children: T;
};

function BasicComponent<T>(props: BasicComponentProps<T>) {
  return props.children;
}

function App() {
  /* 1
   In this file, we will look at two core concepts of React: JSX and Components.
   Moving forward, we will use JSX to describe the UI and see how the raw React APIs translate to this abstraction.
   JSX is a syntax extension to JavaScript.
   It is similar to html but it has the full power of JavaScript.
   It also has its own syntax rules and restrictions.
   */

  /* 2
  A basic React element is created either by calling React.createElement() or by enclosing content inside JSX tags.
  And this is different from a component.
  */
  const element = <h1>Hello Modus</h1>;

  /* 3
   Since in JSX, we can use JavaScript expressions, we can render multiple elements in various fashions.
   Using an array of elements.
   The `key` attribute is used by React to identify which items have changed, which items added, or which items are removed.
   */
  const elementsArray = [
    <li key="1">Hello Modus</li>,
    <li key="2">Good to see you!</li>,
  ];

  /* 4
  A component is a function or a class that optionally accepts arguments, in React they are called “props” and returns a React node.
    - A React node can be:
    - JavaScript primitives;
    - React elements;
    - Arrays just like we have above;
    - Component Functions;
    - React Portals, which allow a React component to render content outside of its parent DOM hierarchy.
  The component function should be named with a capital letter.
  This is because React treats components starting with lowercase letters as DOM elements.
  The component function should also be a pure function. It should not have any side effects.
  The return value of the component should describe how a section of the UI should appear.
  Curly braces are used to embed JavaScript expressions in JSX.
  */
  return (
    <div>
      {/* This is also an example of composition using the curly braces to embed JavaScript variables. */}
      <BasicComponent>{element}</BasicComponent>
      <BasicComponent>
        <>
          {/* In order to be able to render correctly in React it's important to have a single root element inside every React component */}
          <ul>{elementsArray}</ul>
          {/* This is Equivalent with the able synax but in Raw react API */}
          {/* If we are going to try to simply rendernder a list of react elements React is going to try to parse an Arry object wich is not a React Element */}
          {createElement('ul', null, elementsArray)}
        </>
      </BasicComponent>
    </div>
  );
}

export default App;
