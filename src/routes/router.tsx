import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";
import LaboratoryPage from "@/pages/LaboratoryPage";
import AgGridPage from "@/pages/laboratory/AgGridPage";
import TestPage from "@/pages/TestPage";
import DragAndDropPage from "@/pages/laboratory/DragAndDropPage";
import TodoListPage from "@/pages/laboratory/TodoListPage";
import TreeViewPage from "@/pages/laboratory/TreeViewPage";
import LeafletPage from "@/pages/laboratory/LeafletPage";
import ModalPage from "@/pages/laboratory/ModalPage";
import DialogPage from "@/pages/laboratory/DialogPage";

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
        path: 'dialog',
        element: <DialogPage />
      },
      {
        path: "drag-and-drop",
        element: <DragAndDropPage />
      },
      {
        path: 'leaflet',
        element: <LeafletPage />
      },
      {
        path: "modal",
        element: <ModalPage />
      },
      {
        path: "todolist",
        element: <TodoListPage />
      },
      {
        path: "treeview",
        element: <TreeViewPage />
      }
    ]
  },
  {
    path: "/test",
    element: <TestPage />,
  },

])