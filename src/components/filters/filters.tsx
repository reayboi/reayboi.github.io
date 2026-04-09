import './filters.css'
import { removeTagFromFilters } from '../../utils/filters'
import { Tag } from '../tag/tag'
import { useFilters } from '../../state/hooks/use-filters'

export const Filters = () => {
  const { filters, setFilters } = useFilters()
  return (
    <div className="filters">
      {filters.length >= 1 && <span>filtering: </span>}
      {filters.map((filter, index) => (
        <Tag
          key={`${index}-${filter}`}
          tag={filter}
          onClick={() => removeTagFromFilters(filter, filters, setFilters)}
        />
      ))}
    </div>
  )
}
