import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from 'layouts'

import Dashboard from 'views/Dashboard'
import Error from 'views/Error'
import Home from 'views/Home'

import './App.css'

const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
])

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={ROUTER} />
    </ChakraProvider>
  )
}

export default App
