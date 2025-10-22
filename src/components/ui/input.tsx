import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-border-field-default flex h-12 w-full min-w-0 rounded-md border bg-transparent p-4 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-background-field-disabled disabled:border-border-field-disabled",
        "focus-visible:border-field-hover focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
