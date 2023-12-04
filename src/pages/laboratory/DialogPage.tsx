import { useRef } from "react";
import { dialogsState } from "@/store/store"
import { useSetRecoilState } from "recoil"

export default function DialogPage() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const setDialogs = useSetRecoilState(dialogsState)

  const openDialog = () => {
    setDialogs(["MyDialog"])
  }

  const openDialog2 = () => {
    setDialogs(["MyDialog2"]);
  }

  return(
    <div>
      <dialog ref={dialogRef}>
        <p>dialog 태그를 사용한 Modal입니다.</p>
        <button onClick={() => dialogRef.current?.close()}>닫기</button>
      </dialog>
      <button onClick={openDialog}>Dialog 열기</button>
      <button onClick={openDialog2}>Dialog2 열기</button>
      <button onClick={() => dialogRef.current?.showModal()}>dialog 태그 modal 열기</button>
    </div>
  )
}