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
          "bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)]",
          "hover:bg-[var(--color-button-primary-bg-hover)]",
          "active:bg-[var(--color-button-primary-bg-active)]",
          "disabled:bg-[var(--color-button-primary-bg-disabled)] disabled:text-[var(--color-button-primary-text-disabled)]",
          "loading:bg-[var(--color-button-primary-bg-loading)]",
        ].join(" "),
        secondary: [
          "bg-[var(--color-button-secondary-bg)] text-[var(--color-button-secondary-text)] border border-[var(--color-button-secondary-border)]",
          "hover:bg-[var(--color-button-secondary-bg-hover)]",
          "active:bg-[var(--color-button-secondary-bg-active)]",
          "disabled:bg-[var(--color-button-secondary-bg-disabled)] disabled:text-[var(--color-button-secondary-text-disabled)]",
          "loading:bg-[var(--color-button-secondary-bg-loading)]",
        ].join(" "),
        uncontained: [
          "bg-[var(--color-button-uncontained-bg)] text-[var(--color-button-uncontained-text)]",
          "hover:bg-[var(--color-button-uncontained-bg-hover)]",
          "active:bg-[var(--color-button-uncontained-bg-active)]",
          "disabled:bg-[var(--color-button-uncontained-bg-disabled)] disabled:text-[var(--color-button-uncontained-text-disabled)]",
          "loading:bg-[var(--color-button-uncontained-bg-loading)]",
        ].join(" "),
        destructive: [
          "bg-[var(--color-button-destructive-bg)] text-[var(--color-button-destructive-text)]",
          "hover:bg-[var(--color-button-destructive-bg-hover)]",
          "disabled:bg-[var(--color-button-destructive-bg-disabled)] disabled:text-[var(--color-button-primary-text-disabled)]",
        ].join(" "),
        upgrade: [
          "bg-[var(--color-button-upgrade-bg)] text-[var(--color-button-upgrade-text)]",
          "hover:bg-[var(--color-button-upgrade-bg-hover)] hover:text-[var(--color-button-upgrade-text-hover)]",
          "active:bg-[var(--color-button-upgrade-bg-active)] active:text-[var(--color-button-upgrade-text-hover)]",
        ].join(" "),
      },
      size: {
        default: [
          `h-[var(--size-button-height-default)] px-[var(--size-button-px-default)] py-[var(--size-button-py-default)]`,
          `rounded-[var(--size-button-radius-default)]`,
          `text-[var(--font-button-default)] tracking-[var(--tracking-button-default)]`,
        ].join(" "),
        sm: [
          `h-[var(--size-button-height-small)] px-[var(--size-button-px-small)] py-[var(--size-button-py-small)]`,
          `rounded-[var(--size-button-radius-small)]`,
          `text-[var(--font-button-small)]`,
        ].join(" "),
        lg: [
          `h-[var(--size-button-height-large)] px-[var(--size-button-px-large)] py-[var(--size-button-py-large)]`,
          `rounded-[var(--size-button-radius-default)]`,
          `text-[var(--font-button-large)] tracking-[var(--tracking-button-large)]`,
        ].join(" "),
        icon: [
          `h-[var(--size-button-height-icon)] w-[var(--size-button-height-icon)] p-0`,
          `rounded-[var(--size-button-radius-icon)]`,
        ].join(" "),
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
        true: "bg-[var(--color-button-destructive-bg)] text-[var(--color-button-destructive-text)] hover:bg-[var(--color-button-destructive-bg-hover)]",
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
