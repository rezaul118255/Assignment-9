import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import Statistics from './component/Statistics';
import AppliedJobs from './component/AppliedJobs';
import Blog from './component/Blog';
import FeaturedJobDetails from './component/FeaturedJobDetails';
import ErrorPage from './component/ErrorPage';





const router = createBrowserRouter([

  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/Featured-job.json')
      },


      {
        path: 'FeaturedJObDetails/:id',
        element: <FeaturedJobDetails></FeaturedJobDetails>,
        loader: ({ params }) => fetch(`Featured-job.json`)
      },


      {
        path: "Statistics",
        element: <Statistics></Statistics>,

      },
      {
        path: "AppliedJobs",
        element: <AppliedJobs></AppliedJobs>,


      },
      {
        path: "Blog",
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
