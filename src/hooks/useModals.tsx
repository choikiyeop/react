import { ModalsDispatchContext } from "@/context/ModalsContext";
import { useContext } from "react";

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (Component, props) => {
    open(Component, props);
  };

  const closeModal = (Component) => {
    close(Component);
  };

  return {
    openModal,
    closeModal
  };
}