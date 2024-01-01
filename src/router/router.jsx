import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Jobs from '../pages/Jobs'
import About from '../pages/About'
import App from '../App'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/jobs',
        element: <Jobs />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])

export default routes
