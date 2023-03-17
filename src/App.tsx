import { FormEvent, useRef, useState } from 'react';

type OnSubmitUsername = {
  onSubmitUsername: (username: string | undefined) => void;
};

const onSubmitUsername = (username: string | undefined) => {
  alert(`You entered: ${username}`);
};

function UsernameForm({ onSubmitUsername }: OnSubmitUsername) {
  /*
  This callback function handles reading the value from the form on submit event and calling the onSubmitUsername function.
  The potential advantage of this approach is that you may have multiple input elements in the form.
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // This prevents the page from reloading when the form is submitted which is the default browser behavior.
    event.preventDefault();
    /*
    I chose to define a const here to make it easier to read the code. This is a type safe way to access the input element.
    Knowing the name of the input element you want to access, you can use the namedItem method to get it.
     */
    const formEventNamedItem = event?.currentTarget?.elements.namedItem(
      'usernameInput'
    ) as HTMLInputElement;

    onSubmitUsername(formEventNamedItem?.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          name="usernameInput"
          id="usernameInput"
          placeholder="username"
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function UsernameFormRef({ onSubmitUsername }: OnSubmitUsername) {
  /*
  useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
  This reference gives us access to the input element.
   */
  const usernameInputRef = useRef<HTMLInputElement>(null);
  /*
  In this function, we use the ref to access the input element.
  In this case we would need a ref for each input element in the form.
  */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmitUsername(usernameInputRef?.current?.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          placeholder="username"
          ref={usernameInputRef}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
/*
I a controlled form, as the name suggests, we gain control over the value of the form input.
This is done by using the value prop on the input element and the onChange event handler.
 */
function ControlledForm({ userNanme }: { userNanme: string }) {
  // We use the useState hook to set the initial value of the input element.
  const [username, setUsername] = useState(userNanme);
  // Now that we have control over the value of the input element, we can use it do things like validation and to show error messages.
  const [hasError, setHasError] = useState<null | string>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!username) {
      setHasError('Username is required');
      return;
    }
    onSubmitUsername(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          value={username}
          onChange={(e) => {
            setHasError(null);
            setUsername(e.target.value);
          }}
        />
        {/* This is an example of conditional rendering in React */}
        {/* Given that JSX is just syntactic sugar over JavaScript we can use standard JavaScript operators to conditinally render React Nodes */}
        {hasError && <div style={{ color: 'red' }}>{hasError}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  return (
    <div>
      <h3>Regular DOM api form interaction</h3>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
      <h3>React useRef form</h3>
      <UsernameFormRef onSubmitUsername={onSubmitUsername} />
      <h3>React controlled form</h3>
      <ControlledForm userNanme="John" />
    </div>
  );
}

export default App;
