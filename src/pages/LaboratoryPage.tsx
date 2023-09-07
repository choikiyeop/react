import { Link, Outlet } from "react-router-dom";

export default function LaboratoryPage() {

  return(
    <div>
      <div className="flex justify-center">
        <Link to={"/laboratory/aggrid"} className="px-3">AgGrid</Link>
        <Link to={"/laboratory/drag-and-drop"} className="px-3">DragAndDrop</Link>
      </div>
      <Outlet />
    </div>
  )
}