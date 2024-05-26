import { useRouteError, ErrorResponse } from 'react-router-dom'

type RouteError = ErrorResponse & Error

export default function ErrorPage() {
  const error = useRouteError() as RouteError
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}