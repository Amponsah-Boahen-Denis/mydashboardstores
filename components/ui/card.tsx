import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-[1.75rem] border transition-all",
  {
    variants: {
      variant: {
        default: "border-red-100 bg-white/95 shadow-[0_20px_60px_rgba(185,28,28,0.08)]",
        elevated: "border-red-200 bg-white shadow-[0_24px_80px_rgba(185,28,28,0.12)]",
        ghost: "border-red-100 bg-transparent",
        muted: "border-red-50 bg-red-50/50 shadow-none",
        interactive:
          "border-red-200 bg-white/98 shadow-[0_16px_48px_rgba(185,28,28,0.08)] hover:shadow-[0_24px_64px_rgba(185,28,28,0.12)]",
      },
      padding: {
        default: "p-6",
        tight: "p-4",
        relaxed: "p-8",
        none: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant, padding, className }))} {...props} />
  )
);
Card.displayName = "Card";

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-2 border-b border-red-100 pb-4", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-lg font-semibold leading-tight text-red-950", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-red-600", className)} {...props} />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-4 pt-4", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center justify-between border-t border-red-100 pt-4", className)}
      {...props}
    />
  );
}

export { cardVariants };
export { Card };
