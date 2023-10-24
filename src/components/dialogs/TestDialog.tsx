import { Dialog } from "@mui/material";


export default function TestDialog({ open }) {


  return(
    <Dialog open={open}>
      <div>모달 테스트입니다</div>
    </Dialog>
  )
}