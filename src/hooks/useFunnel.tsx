import { useCallback, useMemo, useState } from "react";
import {
  CustomDialog,
  CustomDialogProps,
  Step,
} from "../components/dialogs/CustomDialog";
import { NonEmptyArray } from "../types/common.interface";

type RouteDialogProps<Steps extends NonEmptyArray<string>> = Omit<
  CustomDialogProps<Steps>,
  "steps" | "step"
>;

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  steps: Steps
) => {
  const [stepNumber, setStepNumber] = useState<number>(0);

  const DialogComponent = useMemo(
    () =>
      Object.assign(
        function RouteDialog(props: RouteDialogProps<Steps>) {
          return (
            <CustomDialog steps={steps} step={steps[stepNumber]} {...props} />
          );
        },
        {
          Step,
        }
      ),
    [stepNumber]
  );

  const setStep = useCallback((next: any) => {
    setStepNumber(stepNumber + 1);
  }, []);

  return [DialogComponent, setStep];
};