"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const primaryButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[12px] text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] touch-manipulation",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/85 shadow-md hover:shadow-lg",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary/90",
        ghost:
          "text-primary hover:bg-primary/10 dark:hover:bg-primary/20",
      },
      size: {
        default: "h-11 px-6 py-2 min-h-[44px]",
        sm: "h-10 px-4 py-2 min-h-[44px] text-sm",
        lg: "h-12 px-8 py-3 min-h-[48px] text-base",
        icon: "h-11 w-11 min-h-[44px] min-w-[44px]",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
)

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof primaryButtonVariants> {
  asChild?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function PrimaryButton({
  className,
  variant,
  size,
  fullWidth,
  asChild = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props
}: PrimaryButtonProps) {
  // When asChild is true, we render children directly (they should include any icons)
  // When asChild is false, we render a button with optional icons
  if (asChild) {
    return (
      <Slot
        className={cn(primaryButtonVariants({ variant, size, fullWidth, className }))}
        {...props}
      >
        {children}
      </Slot>
    )
  }

  return (
    <button
      className={cn(primaryButtonVariants({ variant, size, fullWidth, className }))}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
      ) : (
        leftIcon
      )}
      {children}
      {!isLoading && rightIcon}
    </button>
  )
}
