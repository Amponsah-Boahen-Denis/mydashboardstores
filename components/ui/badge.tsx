import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "outline" | "destructive" }) {
  const variantClasses = {
    default: "bg-red-100 text-red-800",
    outline: "border border-red-200 bg-white text-red-900",
    destructive: "bg-red-700 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
