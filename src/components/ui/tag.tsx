'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  variant?: 'green' | 'red' | 'blue'
  className?: string
}

export function Tag({ children, variant = 'green', className }: TagProps) {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
  const variants = {
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    blue: "bg-blue-100 text-blue-800"
  }

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  )
} 