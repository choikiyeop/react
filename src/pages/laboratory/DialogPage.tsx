import { dialogsState } from "@/store/store"
import { useSetRecoilState } from "recoil"


export default function DialogPage() {
  const setDialogs = useSetRecoilState(dialogsState)

  const openDialog = () => {
    setDialogs(["MyDialog"])
  }

  const openDialog2 = () => {
    setDialogs(["MyDialog2"]);
  }

  return(
    <div>
      <button onClick={openDialog}>Dialog 열기</button>
      <button onClick={openDialog2}>Dialog2 열기</button>
    </div>
  )
}