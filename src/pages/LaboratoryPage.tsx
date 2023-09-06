import { Link, Outlet } from "react-router-dom";

export default function LaboratoryPage() {

  return(
    <div>
      <div className="flex justify-center">
        <Link to={"/laboratory/aggrid"}>AgGrid</Link>
      </div>
      <Outlet />
    </div>
  )
}