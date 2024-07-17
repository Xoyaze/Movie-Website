import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserOrHomeRouter from './pages/UserOrHomeRouter'
import AuthProvider from './handles/AuthProvider'
import ErrorPage from './pages/ErrorPage'
import Movies from './components/HomePageComp/Movies'

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserOrHomeRouter />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Movies />
      },
      {
        path: ':key',
        element: <Movies />
      }
    ]
  }
])


const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
