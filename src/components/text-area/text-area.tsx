import { useEffect, useRef, useState } from 'react'
import './text-area.css'

const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string,
) => {
  useEffect(() => {
    if (textAreaRef) {
      // eslint-disable-next-line react-hooks/immutability
      textAreaRef.style.height = '0px'
      const scrollHeight = textAreaRef.scrollHeight

      textAreaRef.style.height = scrollHeight + 'px'
    }
  }, [textAreaRef, value])
}

interface TextAreaProps {
  id: string
}

export const TextArea = ({ id }: TextAreaProps) => {
  const [value, setValue] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  // eslint-disable-next-line react-hooks/refs
  useAutosizeTextArea(textAreaRef.current, value)

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value

    setValue(val)
  }

  return (
    <textarea
      className="text-area"
      id={id}
      onChange={handleChange}
      placeholder="Whatcha thinkin?"
      ref={textAreaRef}
      rows={1}
      value={value}
    />
  )
}
