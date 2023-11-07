import { useStore } from 'effector-react'
import { useState } from 'react'
import Select from 'react-select'
import { $mode } from '@/context/mode'
import { optionStyles } from '../../../styles/searchInput/index'
import { SelectOptionType } from '@/types/common'
import {
  inputStyles,
  controlStyles,
  menuStyles,
} from '../../../styles/searchInput/index'

const SearchInput = () => {
  const mode = useStore($mode)
  const [searchOption, setSearchOption] = useState<SelectOptionType>(null)

  const hendleSearchOptionChange = (selectedOption: SelectOptionType) => {
    setSearchOption(selectedOption)
  }

  return (
    <Select
      placeholder="Я шукаю..."
      value={searchOption}
      onChange={hendleSearchOptionChange}
      styles={{
        ...inputStyles,
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
      isClearable={true}
      openMenuOnClick={false}
      options={[1, 5, 6, 7, 8, 11, 12, 13, 14, 222, 134, 311].map((item) => ({
        value: item,
        label: item,
      }))}
    />
  )
}

export default SearchInput
