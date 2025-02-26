import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'

import BookPage from './pages/BookPage'
import BooksPage from './pages/BooksPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <BooksPage /> },
      { path: '/:id', element: <BookPage />}
    ]
  },
])

export default router
