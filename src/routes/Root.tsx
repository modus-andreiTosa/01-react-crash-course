import { useEffect } from 'react';
import {
  Form,
  useLoaderData,
  useNavigation,
  useSubmit,
} from 'react-router-dom';
import { Outlet, NavLink } from 'react-router-dom';
import { ContactType } from '../../contacts';

const styleActiveLink = ({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) => {
  if (isActive) {
    return 'active';
  }
  if (isPending) {
    return 'pending';
  }
  return '';
};

export function Root() {
  const { contacts, q } = useLoaderData() as {
    contacts: Array<ContactType>;
    q: string;
  };
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');

  useEffect(() => {
    let inputElement;
    // the if statements are here to make sure the object exists before we try to access them;
    if (document) {
      inputElement = document.getElementById('q') as HTMLInputElement;
    }
    if (inputElement) {
      inputElement.value = q;
    }
  }, [q]);
  return (
    <>
      <div
        id="sidebar"
        className={navigation.state === 'loading' ? 'loading' : ''}
      >
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              aria-label="Search contacts"
              className={searching ? 'searching' : ''}
              defaultValue={q}
              id="q"
              name="q"
              onChange={(event) => {
                const isFirstSearch = q === null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
              placeholder="Search"
              type="search"
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={styleActiveLink}
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{' '}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
