import './tag.css'

interface TagProps {
  tag: string
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
  color?: string
}

export const Tag = ({ tag, onClick, color }: TagProps) => {
  return (
    <button
      className="tag"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      #{tag}
    </button>
  )
}
