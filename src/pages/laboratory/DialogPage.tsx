import { dialogsState } from "@/store/store"
import { useSetRecoilState } from "recoil"


export default function DialogPage() {
  const setDialogs = useSetRecoilState(dialogsState)

  const openDialog = () => {
    setDialogs(["MyDialog"])
  }

  return(
    <div>
      <button onClick={openDialog}>Dialog 열기</button>
    </div>
  )
}