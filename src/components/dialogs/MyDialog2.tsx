import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

export default function MyDialog2({ onClose }) {


  return(
    <Dialog open>
      <DialogTitle>Dialog2</DialogTitle>
      <DialogContent>내용</DialogContent>
      <DialogActions>
        <button onClick={onClose}>취소</button>
      </DialogActions>
    </Dialog>
  )
}