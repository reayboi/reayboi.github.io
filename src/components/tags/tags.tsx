import './tags.css'
import { Tag } from "../tag/tag"
import { useFilters } from '../../context/filters-context'
import { addTagToFilters } from '../../utils/filters'

interface TagsProps {
    tags: Array<string>
}

export const Tags = ({ tags }: TagsProps) => {
    const { filters, setFilters } = useFilters();
    return (
        <div className='tags'>
            {tags.map((tag, index) => <Tag key={`${index}-${tag}`} tag={tag} onClick={() => addTagToFilters(tag, filters, setFilters)}/>)}
        </div>
    )
}