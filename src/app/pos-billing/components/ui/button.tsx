import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "danger" | "success" | "warning" | "outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
      primary: "bg-indigo-600 text-white hover:bg-indigo-700",
      danger: "bg-red-600 text-white hover:bg-red-700",
      success: "bg-green-600 text-white hover:bg-green-700",
      warning: "bg-yellow-500 text-white hover:bg-yellow-600",
      outline: "border border-gray-300 bg-white hover:bg-gray-50",
    };

    return (
      <button
        className={cn(
          "pos-button inline-flex items-center justify-center",
          variants[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };