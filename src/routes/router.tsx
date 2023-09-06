import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";
import LaboratoryPage from "@/pages/LaboratoryPage";
import AgGridPage from "@/pages/laboratory/AgGridPage";
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
        element: <AgGridPage />
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