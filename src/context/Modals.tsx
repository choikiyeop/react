import { ModalsDispatchContext, ModalsStateContext } from "@/context/ModalsContext";
import { useContext } from "react";

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;

    const onClose = () => {
      close(Component);
    }

    const handleSubmit = async () => {
      if (typeof onSubmit === 'function') {
        await onSubmit();
      }
      onClose();
    }

    return <Component key={index} onClose={onClose} onSubmit={handleSubmit} {...restProps} />
  })
}

export default Modals;