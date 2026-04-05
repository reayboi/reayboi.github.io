import './tags.css'
import { Tag } from "../tag/tag"

interface TagsProps {
    tags: Array<string>
}

export const Tags = ({ tags }: TagsProps) => {
    return (
        <div className='tags'>
            {tags.map((tag) => <Tag tag={tag}/>)}
        </div>
    )
}