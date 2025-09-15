import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        neutral:
          "border-border-neutral bg-background-neutral text-text-neutral [a&]:hover:bg-background-neutral/90",
        informational:
          "border-border-informational/20 bg-background-informational text-text-informational [a&]:hover:bg-background-informational/90",
        success:
          "border-border-success/20 bg-background-success text-text-success [a&]:hover:bg-background-success/90",
        warning:
          "border-border-warning/20 bg-background-warning text-text-warning [a&]:hover:bg-background-warning/90",
        error:
          "border-border-error/20 bg-background-error text-text-error [a&]:hover:bg-background-error/90",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
