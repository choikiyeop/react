import React, { Suspense } from "react";
import { dialogsState } from "@/store/store";
import { useRecoilState } from "recoil";

export type DialogType = "MyDialog" | "MyDialog2";

export const dialogList: Record<DialogType, React.LazyExoticComponent<any>> = {
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
      <Suspense key={index}>
        <DialogComponent onClose={closeDialog} />
      </Suspense>
    );
  })

}