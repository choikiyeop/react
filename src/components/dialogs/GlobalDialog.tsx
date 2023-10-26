import React, { Suspense } from "react";
import { dialogsState } from "@/store/store";
import { useRecoilState } from "recoil";
import { Dialog } from "@mui/material";

export const dialogList = {
  MyDialog: React.lazy(() => import('@/components/dialogs/MyDialog')),
  MyDialog2: React.lazy(() => import('@/components/dialogs/MyDialog2'))
}

export default function GlobalDialog() {
  const [dialogs, setDialogs] = useRecoilState(dialogsState);

  const closeDialog = () => {
    setDialogs(dialogs.slice(0, dialogs.length-1))
  }

  return dialogs.map((dialog, index) => {
    const DialogComponent = dialogList[dialog];

    return (
      <Suspense>
        <Dialog open>
          <DialogComponent key={index} onClose={closeDialog} />
        </Dialog>
      </Suspense>);
  })

}