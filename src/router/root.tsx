import { Outlet, Link } from 'react-router-dom'
import { routes } from '.'

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router</h1>
        <div>
          <form
            id="search-form"
            role="search"
          >
            <input
              id="q"
              aria-label="Search"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
        </div>
        <nav>
          <ul>
            {routes.map((route) => (
              <li key={route.path}>
                <Link to={route.path!}>/{route.path}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}
