import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorMessage = ({ error }: { error: unknown }) =>
  isRouteErrorResponse(error) ? (
    <i>
      {error.statusText}, {error.status}
    </i>
  ) : (
    <p>Unknown Error</p>
  );

export function ErrorPage() {
  const error = useRouteError();
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <ErrorMessage error={error} />
    </div>
  );
}
