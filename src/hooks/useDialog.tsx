import { useMemo, useCallback } from "react";
import { CustomDialog } from "../components/dialogs/CustomDialog";
import { NonEmptyArray } from "../types/common.interface";

export const useDialog = <Steps extends NonEmptyArray<string>>(
  steps: Steps,
  options?: {
    initialStep?: Steps[number];
    onStepChange?: (name: Steps[number]) => void;
  }
): readonly [DialogComponent<Steps>, (step: Steps[number], options?: any)] => {

  const DialogComponent = useMemo(
    () => 
      Object.assign(
        function RouteFunnel(props) {
          // step에 맞는 Dialog 리턴
          return <CustomDialog<Steps> steps={steps} step={step} {...props} />;
        },
        {
          Step,
        }
      ),
    []
  );

  const setStep = useCallback(
    (step: Steps[number], setStepOptions?: any) => {
      options?.onStepChange?.(step);

    },
    [options]
  );
}