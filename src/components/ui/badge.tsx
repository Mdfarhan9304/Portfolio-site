'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium transition-colors",
        {
          'bg-white/10 text-white': variant === 'default',
          'border border-white/10 text-white': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };



