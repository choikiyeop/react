import { Link, Outlet } from "react-router-dom";

export default function LaboratoryPage() {

  return(
    <div>
      <div className="flex justify-center">
        <Link to={"/laboratory/aggrid"} className="px-3">AgGrid</Link>
        <Link to={"/laboratory/dialog"} className="px-3">DialogPage</Link>
        <Link to={"/laboratory/modal"} className="px-3">ModalPage</Link>
        <Link to={"/laboratory/drag-and-drop"} className="px-3">DragAndDrop</Link>
        <Link to={"/laboratory/kakao-postcode"}>KakaoPostCode</Link>
        <Link to={'/laboratory/leaflet'}>Leaflet</Link>
        <Link to={"/laboratory/todolist"} className="px-3">TodoList</Link>
        <Link to={"/laboratory/treeview"} className="px-3">TreeView</Link>
      </div>
      <Outlet />
    </div>
  )
}