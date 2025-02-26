import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'

import BooksPage from './pages/BooksPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: '/', element: <BooksPage /> }],
  },
])

export default router
