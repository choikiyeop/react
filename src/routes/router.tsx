import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";
import LaboratoryPage from "@/pages/LaboratoryPage";
import AgGrid from "@/pages/laboratory/AgGrid";
import TestPage from "@/pages/TestPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/laboratory",
    element: <LaboratoryPage />,
    children: [
      {
        path: "aggrid",
        element: <AgGrid />
      },
      {
        path: "",
        element: <></>
      }
    ]
  },
  {
    path: "/test",
    element: <TestPage />,
  },

])