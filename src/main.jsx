import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Help from "./pages/Help.jsx";
import Home from "./pages/Home.jsx";
import Needs from "./pages/Needs.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/Future_Corp",
        element: <Home />,
      },
      {
        path: "/Future_Corp/needs/:id",
        element: <Needs />,
        loader: ({ params }) => {
        return (params);
        },
      },
      {
        path: "/Future_Corp/help",
        element: <Help />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
