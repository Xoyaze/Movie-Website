import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserOrHomeRouter from './pages/UserOrHomeRouter'
import AuthProvider from './handles/AuthProvider'
import ErrorPage from './pages/ErrorPage'
import Movies from './components/HomePageComp/Movies'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'
import loadingAnimation from '../src/assets/loadingAnimation.gif';

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const handleLoad = () => {
      setLoading(false);
    }

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    }

  }, []);


  return (
    <>
      {loading ? (
        <div className='h-screen w-screen flex justify-center items-center bg-black'>
          <img src={loadingAnimation} alt="loadingAnimation" />
        </div>
      ): (
        <AuthProvider>
          <ToastContainer limit={5} position='top-left' />
          <RouterProvider router={router} />
        </AuthProvider>
      )}
    </>
  )
}

export default App
