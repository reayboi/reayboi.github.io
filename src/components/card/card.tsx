import type { ReactNode } from 'react'
import './card.css'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
  return <div className={`card ${className}`}>{children}</div>
}
