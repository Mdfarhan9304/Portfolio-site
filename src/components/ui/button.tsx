'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-white/10 text-white hover:bg-white/20': variant === 'default',
            'border border-white/10 text-white hover:bg-white/5': variant === 'outline',
            'h-9 px-4 py-2': size === 'default',
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-6': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button }; 