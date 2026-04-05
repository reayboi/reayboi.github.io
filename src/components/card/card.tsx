import type { ReactNode } from 'react';
import './card.css'


interface CardProps {
	children: ReactNode;
}

export const Card = ({ children } : CardProps) => {
	return <div className='card'>{children}</div>;
}