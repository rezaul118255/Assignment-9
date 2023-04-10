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




const router = createBrowserRouter([

  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch('job-category.json'),
        loader: () => fetch('Featured-job.json')




      },
      // {
      //   path: "/",
      //   element: <Featured></Featured>,
      //   // loader: () => fetch('job-category.json'),
      //   loader: () => fetch('Featured-job.json')




      // },

      {
        path: "Statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "AppliedJobs",
        element: <AppliedJobs></AppliedJobs>
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
