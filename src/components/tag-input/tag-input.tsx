import { useEffect, useState } from 'react'
import './tag-input.css'
import { Tag } from '../tag/tag'

interface TagInputProps {
  tags: Array<string>
  setTags: (tags: Array<string>) => void
}

export const TagInput = ({ tags, setTags }: TagInputProps) => {
  const [input, setInput] = useState<string>()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      const cleanedInput = input?.trim().toLowerCase()

      if (cleanedInput && !tags.includes(cleanedInput)) {
        setTags([...tags, cleanedInput])
        setInput('')
      }
    }
  }

  useEffect(() => {
    console.log(tags)
  }, [tags])

  const tagColors: Array<string> = ['#64a7b8', '#7666eb']

  return (
    <div className="tag-input">
      <input
        value={input ?? ''}
        type="text"
        className="input"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="#hashtag"
      />
      <div className="tags">
        {tags.map((tag) => (
          <Tag
            key={tag}
            tag={tag}
            onClick={() => setTags(tags.filter((a) => a !== tag))}
            // eslint-disable-next-line react-hooks/purity
            color={tagColors[Math.floor(Math.random() * tagColors.length)]}
          />
        ))}
      </div>
    </div>
  )
}
