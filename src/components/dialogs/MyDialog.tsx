import { DialogActions, DialogContent, DialogTitle } from "@mui/material";

export default function MyDialog({ onClose }) {

  

  return(
    <>
      <DialogTitle>제목</DialogTitle>
      <DialogContent>
        내용
      </DialogContent>
      <DialogActions>
        <button onClick={onClose}>취소</button>
      </DialogActions>
    </>
  )
}