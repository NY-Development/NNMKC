
import App from '../App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import PrayerRequest from '../pages/PrayerRequest'
import Ministries from '../pages/Ministries'
import Events from '../pages/Events'
import Sermons from '../pages/Sermons'
import Contact from '../pages/Contact'
import Giving from '../pages/Giving'
import Error from '../pages/Error'
import Login from '../pages/Login'
import SignUp from '../pages/Signup'

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about-us',
        element: <About />
      },
      {
        path: 'prayer-request',
        element: <PrayerRequest />
      },
      {
        path: 'ministries',
        element: <Ministries />
      },
      {
        path: 'events',
        element: <Events />
      },
      {
        path: 'sermons',
        element: <Sermons />
      },
      {
        path: 'giving',
        element: <Giving />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
    ]
  },
])

function Routes() {
  return (
    
    <RouterProvider router={routes} />
      
    
  )
}

export default Routes

