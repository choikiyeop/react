import { modals } from "@/context/Modals";
import useModals from "@/hooks/useModals"

export default function ModalPage() {
  const { openModal } = useModals();

  const handleClick = () => {
    openModal(modals.myModal, {
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