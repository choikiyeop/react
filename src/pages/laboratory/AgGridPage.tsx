import { AgGridReact } from "ag-grid-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import 'ag-grid-community/styles/ag-grid.css'; // 항상 필요
import 'ag-grid-community/styles/ag-theme-alpine.css'; // 옵션

export default function AgGridPage() {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'make', filter: true },
    { field: 'model', filter: true },
    { field: 'price' }
  ])
  const defaultColDef = useMemo(() => ({
    sortable: true
  }));

  const buttonListener = useCallback(e => {
    gridRef.current?.api.deselectAll();
  }, []);

  const onCellClicked = useCallback(e => {
    console.log('cellClicked', e);
  }, []);

  useEffect(() => {
    setRowData([
      {
        make: "Toyota",
        model: "Celica",
        price: "35000"
      },
      {
        make: "Ford",
        model: "Mondeo",
        price: "32000"
      },
      {
        make: "Porsche",
        model: "Boxter",
        price: "72000"
      }
    ])
  }, []);

  return(
    <div className="flex justify-center">
      
      <div className="ag-theme-alpine" style={{ width: 600, height: 500 }}>
        <button onClick={buttonListener}>선택 없애기</button>
        <AgGridReact
          ref={gridRef}
          defaultColDef={defaultColDef}
          columnDefs={columnDefs}
          rowData={rowData}
          onCellClicked={onCellClicked}
        />
      </div>
    </div>
  )
}