import { FormEvent, useRef } from 'react';

type OnSubmitUsername = { onSubmitUsername: (username: string) => void };

function UsernameForm({ onSubmitUsername }: OnSubmitUsername) {
  // This function is called when the form is submitted.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // This prevents the page from reloading when the form is submitted which is the default behavior.
    event.preventDefault();
    // We read the value from the input element using the usernameInput id we set on the input element.
    onSubmitUsername(event?.target?.elements?.usernameInput.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function UsernameFormRef({ onSubmitUsername }: OnSubmitUsername) {
  // This is a reference to the input element.
  // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
  // This reference gives us access to the input element.
  const usernameInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmitUsername(usernameInputRef?.current?.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={usernameInputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = (username: string) =>
    alert(`You entered: ${username}`);

  return (
    <div>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
      <UsernameFormRef onSubmitUsername={onSubmitUsername} />
    </div>
  );
}

export default App;
