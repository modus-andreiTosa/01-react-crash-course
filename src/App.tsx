import './app.css';

const BasicComponent = (props: { children: JSX.Element | null }) =>
  props.children;

function App() {
  // There are multiple ways to add style in React.
  // The most basic one is to use the style attribute.
  // The style attribute accepts an object with camelCased properties rather than a CSS string.
  // Since the style object is plain JavaScript, hyphenated properties are not supported.
  const inlineStyledElement = (
    <h1
      style={{
        color: 'green',
        borderWidth: '1px',
        borderColor: 'orange',
        borderStyle: 'solid',
        width: 'fit-content',
      }}
    >
      Hello Modus!
    </h1>
  );
  // We can also symply use classes just like we do in HTML.
  // We do need to use the className attribute instead of class. This is because class is a reserved word in JavaScript.
  const styledElement = (
    <h1 className="styled-element box--large">Hello Modus!</h1>
  );
  const mediumHeading = (
    <h2 className="styled-element box--medium">Hello Modus!</h2>
  );
  const smallHeading = (
    <h2 className="styled-element box--small">Hello Modus!</h2>
  );
  // Using the className attribute, we can reuse the same class in multiple elements and mix and match multiple classes.
  return (
    <div>
      <BasicComponent>{inlineStyledElement}</BasicComponent>
      <BasicComponent>{styledElement}</BasicComponent>
      <BasicComponent>{mediumHeading}</BasicComponent>
      <BasicComponent>{smallHeading}</BasicComponent>
    </div>
  );
}

export default App;
