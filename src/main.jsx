import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bottols from "./components/Bottols/Bottols";
import AddBottol from "./components/AddBottol/AddBottol.jsx";
import UpdateBottol from "./components/UpdateBottol/UpdateBottol.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Bottols />,
        loader: () => fetch("https://memorable-water-bottols-server.vercel.app/bottols"),
      },
      {
        path: "/add-bottol",
        element: <AddBottol />,
      },
      {
        path: "/update-bottol/:id",
        element: <UpdateBottol />,
        loader: ({ params }) =>
          fetch(`https://memorable-water-bottols-server.vercel.app/bottols/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
