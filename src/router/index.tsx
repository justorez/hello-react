import { createHashRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Root from './root'
import ErrorPage from './error-page'
import Game from '@/pages/game'
import { Immer } from '@/pages/immer'
import ModalForm from '@/pages/modal-form'

export const routes: RouteObject[] = [
  {
    path: '',
    element: <Game />
    // index: true
  },
  {
    path: 'immer',
    element: <Immer />
  },
  {
    path: 'form',
    element: <ModalForm />
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
