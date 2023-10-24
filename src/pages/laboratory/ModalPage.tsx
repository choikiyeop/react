import MyModal from "@/components/modals/MyModal";
import useModals from "@/hooks/useModals"
import { Dialog } from "@mui/material";


export default function ModalPage() {
  const { openModal } = useModals();

  const handleClick = () => {
    openModal(MyModal, {
      onSubmit: () => {
        console.log("제출");
      }
    });
  }

  return(
    <div>
      <button onClick={handleClick}>모달 열기</button>
    </div>
  )
}