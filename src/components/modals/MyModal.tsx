import { Dialog, DialogActions } from "@mui/material";

export default function MyModal({ onSubmit, onClose }) {

  const handleSubmit = () => {
    onSubmit();
  }

  const handleClose = () => {
    onClose();
  }

  return(
    <Dialog open>
      <div>모달 </div>
      <DialogActions>
        <button onClick={handleClose}>취소</button>
        <button onClick={handleSubmit}>확인</button>
      </DialogActions>
    </Dialog>
  )
}