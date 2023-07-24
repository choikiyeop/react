import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  label?: string;
  children: ReactNode;
}

export const Button = ({
  size = 'md',
  variant,
  label,
  children,
  ...props
}: ButtonProps) => {
  return(
    <button
      className={
        sizes[size]
      }
      {...props}
    >
      {children}
    </button>
  )
}

const sizes: Record<'sm'|'md'|'lg', string> = {
  sm: "",
  md: "py-13pxr text-sm rounded-xl",
  lg: "",
}