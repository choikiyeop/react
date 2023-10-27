import { dialogsState } from "@/store/store";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useRecoilState } from "recoil";

export default function MyDialog({ onClose }: () => void) {
  const [dialogs, setDialog] = useRecoilState(dialogsState);

  const openDialog2 = () => {
    setDialog([...dialogs, "MyDialog2"]);
  }

  return(
    <Dialog open >
      <DialogTitle>제목</DialogTitle>
      <DialogContent>
        내용
      </DialogContent>
      <DialogActions>
        <button onClick={openDialog2}>Dialog2 열기</button>
        <button onClick={onClose}>취소</button>
      </DialogActions>
    </Dialog>
  )
}