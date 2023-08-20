import { useState } from "react";
import { Button } from "@mui/material";
import { useDialog } from "../hooks/useDialog";

export default function TestPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [Dialog, setState] = useDialog(['apartment-type', 'select-region', 'done'] as const);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <div>
      <Button variant="outlined" onClick={handleOpen} />
    </div>
  );
}