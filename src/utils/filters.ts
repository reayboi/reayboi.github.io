export const isTagInFilters = (
  tag: string,
  filters: Array<string>,
): boolean => {
  if (filters.includes(tag)) {
    return true
  } else {
    return false
  }
}

export const addTagToFilters = (
  tag: string,
  filters: Array<string>,
  setFilters: (value: Array<string>) => void,
) => {
  if (!isTagInFilters(tag, filters)) {
    setFilters([...filters, tag])
  }
}

export const removeTagFromFilters = (
  tag: string,
  filters: Array<string>,
  setFilters: (value: Array<string>) => void,
) => {
  setFilters(filters.filter((f) => f !== tag))
}
