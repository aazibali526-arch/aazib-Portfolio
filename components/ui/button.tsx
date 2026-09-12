import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[5px] font-mono text-[13px] font-semibold tracking-[0.01em] transition-[background,color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#5B5FF8]",
  {
    variants: {
      variant: {
        primary:
          "text-white bg-gradient-to-b from-[#6C6FFB] to-[#4F46E5] hover:from-white hover:to-[#E2E2DE] hover:text-[#111111] hover:-translate-y-[1px]",
        secondary:
          "text-[#111111] bg-gradient-to-b from-white to-[#E2E2DE] hover:from-[#6C6FFB] hover:to-[#4F46E5] hover:text-white hover:-translate-y-[1px]",
        ghost:
          "text-[#F4F4F5] bg-transparent border border-[#1D1D21] hover:border-[#3033A0] hover:-translate-y-[1px]",
      },
      size: {
        default: "h-[46px] px-5 md:h-[50px]",
        sm: "h-[38px] px-4 text-[12px]",
        icon: "h-[46px] w-[46px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };