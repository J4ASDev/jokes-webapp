import { useCallback } from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'

import useContext from './Context'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import Select from '../../atoms/Select'

const _OPTIONS = [
  { value: 'views', text: 'Views' },
  { value: 'createdAt', text: 'Created Date' },
]

function SearchFilter() {
  const { updateData, filter } = useContext()
  const { handleSubmit } = useFormContext()

  const onSubmit = useCallback(
    handleSubmit(({ search, searchSortby }: any) => {
      updateData({ newFilter: `&${searchSortby}=${search}` })
    }),
    [handleSubmit, updateData]
  )

  const handleReset = useCallback(() => updateData({ newFilter: '' }), [updateData])

  return (
    <Wrapper>
      <Input name='search' placeholder='Search by...' />
      <Select name='searchSortby' options={_OPTIONS} />
      <Button
        text='+'
        width='40px'
        height='40px'
        onClick={onSubmit}
      />
      <Button
        text='Reset'
        height='40px'
        onClick={handleReset}
        type='button'
        disabled={filter === ''}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: fit-content;
  display: grid;
  gap: 10px;
  grid-template-columns: 300px repeat(3, auto);
  justify-self: center;
`

export default SearchFilter
