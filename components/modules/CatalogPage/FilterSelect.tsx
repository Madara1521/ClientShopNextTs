import { useStore } from 'effector-react'
import { useState } from 'react'
import Select from 'react-select'
import { menuStyles, selectStyles } from '@/styles/catalog/select'
import { controlStyles, optionStyles } from '@/styles/searchInput'
import { $mode } from '@/context/mode'
import { SelectOptionType } from '@/types/common'
import { createSelectOption } from '@/utils/common'
import { categoriesOptions } from '@/utils/selectContents'

const FilterSelect = () => {
  const mode = useStore($mode)
  const [categoryOption, setCategoryOption] = useState<SelectOptionType>(null)

  const hendleCategoryOptionChange = (selectedOption: SelectOptionType) => {
    setCategoryOption(selectedOption)
  }

  return (
    <Select
      placeholder="Я шукаю..."
      value={categoryOption || createSelectOption('Спочатку дешеві')}
      onChange={hendleCategoryOptionChange}
      styles={{
        ...selectStyles,
        control: (defaultStyles) => ({
          ...controlStyles(defaultStyles, mode),
        }),
        input: (defaultStyles) => ({
          ...defaultStyles,
          color: mode === 'dark' ? '#f2f2f2' : '#222222',
        }),
        menu: (defaultStyles) => ({
          ...menuStyles(defaultStyles, mode),
        }),
        option: (defaultStyles, state) => ({
          ...optionStyles(defaultStyles, state, mode),
        }),
      }}
      isSearchable={false}
      options={categoriesOptions}
    />
  )
}

export default FilterSelect
