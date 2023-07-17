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
  const { updateData, limit, page } = useContext()
  const { handleSubmit } = useFormContext()

  const onSubmit = handleSubmit(({ search, sortby }: any) => {
    let filter: string = !!search ? `&${sortby}=${search}` : `&_sort=${sortby}`

    updateData(page, limit, filter)
  })

  return (
    <Wrapper>
      <Input name='search' placeholder='Search by...' />
      <Select name='sortby' options={_OPTIONS} />
      <Button
        text='Search'
        width='80px'
        height='40px'
        onClick={onSubmit}
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
