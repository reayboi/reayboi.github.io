import type { ReactNode } from 'react'
import './card.css'

interface CardProps {
  children: ReactNode
  variant?: 'default' | 'create'
  className?: string
}

export const Card = ({
  children,
  variant = 'default',
  className = '',
}: CardProps) => {
  return <div className={`card ${className} ${variant}`}>{children}</div>
}
