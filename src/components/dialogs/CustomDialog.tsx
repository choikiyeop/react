import {
  Children,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
} from "react";
import { NonEmptyArray } from "../../types/common.interface";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export interface CustomDialogProps<Steps extends NonEmptyArray<string>> {
  steps: Steps;
  step: Steps[number];
  children:
    | Array<ReactElement<StepProps<Steps>>>
    | ReactElement<StepProps<Steps>>;
}

export const CustomDialog = <Steps extends NonEmptyArray<string>>({
  steps,
  step,
  children,
}: CustomDialogProps<Steps>) => {
  const validChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter((i) =>
      steps.includes((i.props as Partial<StepProps<Steps>>).name ?? "")
    ) as Array<ReactElement<StepProps<Steps>>>;

  const targetStep = validChildren.find((child) => child.props.name === step);

  return <>{targetStep}</>;
};

export interface StepProps<Steps extends NonEmptyArray<string>> {
  name: Steps[number];
  onEnter?: () => void;
  children: ReactNode;
}

export const Step = <T extends NonEmptyArray<string>>({
  onEnter,
  children,
}: StepProps<T>) => {
  useEffect(() => {
    onEnter?.();
  }, [onEnter]);

  return <>{children}</>;
};
