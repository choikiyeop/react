import { ModalsDispatchContext, ModalsStateContext } from "@/context/ModalsContext";
import React, { Suspense } from "react";
import { useContext } from "react";

export const modals = {
  myModal: React.lazy(() => import('@/components/modals/MyModal')),
}

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

    return <Suspense fallback={<></>}><Component key={index} onClose={onClose} onSubmit={handleSubmit} {...restProps} /></Suspense>
  })
}

export default Modals;