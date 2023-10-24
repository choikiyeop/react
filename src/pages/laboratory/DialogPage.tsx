import { useState } from "react";
import TestDialog from "@/components/dialogs/TestDialog"

export default function DialogPage() {
  const [open, setOpen] = useState(false);

  return(
    <div>
      <TestDialog open={open} />
      <button onClick={() => setOpen(true)}>모달 열기</button>
    </div>
  )
}