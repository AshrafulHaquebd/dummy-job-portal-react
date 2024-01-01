import { createBrowserRouter } from 'react-router-dom'

import Jobs from '../pages/Jobs'
import About from '../pages/About'
import App from '../App'
import Home from '../pages/Home/Home'
import Contact from '../pages/contact/Contact'
import axios from 'axios'
import JobCardDetails from '../pages/jobCardDetails/JobCardDetails'
import PostJobsForm from '../pages/PostJobsForm.jsx/PostJobsForm'

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
        path: '/jobcarddetails/:jobId',
        element: <JobCardDetails />,
        loader: async ({ params }) =>
          await axios.get(`http://localhost:9000/jobs/${params.jobId}`),
      },
      {
        path: '/postjob',
        element: <PostJobsForm />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])

export default routes
