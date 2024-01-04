import { createBrowserRouter } from 'react-router-dom'

import Jobs from '../pages/Jobs'
import App from '../App'
import Home from '../pages/Home/Home'
import axios from 'axios'
import JobCardDetails from '../pages/jobCardDetails/JobCardDetails'
import PostJobsForm from '../pages/PostJobsForm.jsx/PostJobsForm'
import UpdateCardDetails from '../pages/updatePost/UpdateCardDetails'
import SignUpForm from '../pages/signup/SignUpForm'
import LoginForm from '../pages/login/LoginForm'

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
        path: '/updatecarddetails/:updateId',
        element: <UpdateCardDetails />,
        loader: ({ params }) =>
          axios.get(`http://localhost:9000/jobs/${params.updateId}`),
      },
      {
        path: '/signup',
        element: <SignUpForm />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
    ],
  },
])

export default routes
