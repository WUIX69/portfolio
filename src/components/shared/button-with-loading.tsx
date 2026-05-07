import * as React from "react"
import { Loader2 } from "lucide-react"
import { Button, type buttonVariants } from "@/components/ui/button"
import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

interface ButtonWithLoadingProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  loadingText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const ButtonWithLoading = ({
  children,
  isLoading,
  loadingText,
  leftIcon,
  rightIcon,
  className,
  disabled,
  variant,
  size,
  ...props
}: ButtonWithLoadingProps) => {
  return (
    <Button
      className={cn("gap-2", className)}
      disabled={isLoading || disabled}
      variant={variant}
      size={size}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          {loadingText || children}
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </Button>
  )
}

export { ButtonWithLoading }
