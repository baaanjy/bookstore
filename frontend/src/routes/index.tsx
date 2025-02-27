import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'

import BookPage from './pages/BookPage'
import BooksPage from './pages/BooksPage'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <BooksPage /> },
      { path: '/:id', element: <BookPage /> },
      { path: "*", element: <ErrorPage /> }
    ],
  },
])

export default router
