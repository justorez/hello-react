import { createHashRouter, RouteObject } from 'react-router-dom'
import Root from './root'
import ErrorPage from './error-page'
import Game from '../pages/game'
import { Immer } from '../pages/immer'

export const routes: RouteObject[] = [
  {
    path: 'game',
    element: <Game />,
    index: true
  },
  {
    path: 'immer',
    element: <Immer />
  }
]

export const router = createHashRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: routes
    }
  ],
  {
    // history mode
    // basename: import.meta.env.BASE_URL
  }
)
