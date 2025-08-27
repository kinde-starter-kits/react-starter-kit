import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: [
          "bg-[hsl(0,0%,6%)] text-[hsl(0,0%,100%)]",
          "hover:bg-[hsl(0,0%,30%)]",
          "active:bg-[hsl(0,0%,6%)]",
          "disabled:bg-[hsl(0,0%,92%)] disabled:text-[hsl(0,0%,67%)]",
          "loading:bg-[hsl(0,0%,67%)]",
        ].join(" "),
        secondary: [
          "bg-[hsl(0,0%,96%)] text-[hsl(0,0%,6%)] border border-[hsl(0,0%,86%)]",
          "hover:bg-[hsl(0,0%,92%)]",
          "active:bg-[hsl(0,0%,86%)]",
          "disabled:bg-[hsl(0,0%,96%)] disabled:text-[hsl(0,0%,67%)]",
          "loading:bg-[hsl(0,0%,96%)]",
        ].join(" "),
        uncontained: [
          "bg-transparent text-[hsl(0,0%,6%)]",
          "hover:bg-[hsl(0,0%,96%)]",
          "active:bg-[hsl(0,0%,92%)]",
          "disabled:bg-transparent disabled:text-[hsl(0,0%,67%)]",
          "loading:bg-[hsl(0,0%,96%)]",
        ].join(" "),
        destructive: [
          "bg-[hsl(0,100%,38%)] text-[hsl(0,0%,100%)]",
          "hover:bg-[hsl(0,100%,25%)]",
          "disabled:bg-[hsl(0,100%,96%)] disabled:text-[hsl(0,0%,67%)]",
        ].join(" "),
        upgrade: [
          "bg-[hsl(275,100%,95%)] text-[hsl(274,62%,53%)]",
          "hover:bg-[hsl(275,100%,92%)] hover:text-[hsl(274,91%,25%)]",
          "active:bg-[hsl(275,100%,89%)] active:text-[hsl(274,91%,25%)]",
        ].join(" "),
      },
      size: {
        default:
          "h-12 px-4 py-3 rounded-[0.5rem] text-[1rem] font-[500] tracking-[-0.005em] leading-[1.5]",
        sm: "h-10 px-3 py-2.5 rounded-[0.25rem] text-[0.875rem] font-[500] leading-[1.42857]",
        lg: "h-14 px-6 py-4 rounded-[0.5rem] text-[1.125rem] font-[500] tracking-[-0.005em] leading-[1.33333]",
        icon: "h-12 w-12 p-0 rounded-[50%]",
      },
      fullWidth: {
        true: "w-full justify-center",
        false: "",
      },
      iconLeading: {
        true: "pl-6",
        false: "",
      },
      iconOnly: {
        true: "gap-0 p-0",
        false: "",
      },
      destructive: {
        true: "bg-[hsl(0,100%,38%)] text-[hsl(0,0%,100%)] hover:bg-[hsl(0,100%,25%)]",
        false: "",
      },
      loading: {
        true: "pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
      iconLeading: false,
      iconOnly: false,
      destructive: false,
      loading: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  fullWidth?: boolean;
  iconLeading?: boolean;
  iconOnly?: boolean;
  destructive?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      iconLeading,
      iconOnly,
      destructive,
      loading,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
            iconLeading,
            iconOnly,
            destructive,
            loading,
            className,
          })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
