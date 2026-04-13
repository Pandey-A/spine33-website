'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface ScrollFadeProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollFade({ children, className = '', delay = 0 }: ScrollFadeProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}
