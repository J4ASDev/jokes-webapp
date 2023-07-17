import { useCallback, useMemo } from 'react'
import styled from 'styled-components'

import useContext from './Context'
import Button from '../../atoms/Button'
import ItemsPerPageEnum from '../../../ts/enums/ItemsPerPageEnum'
import Select from '../../atoms/Select'

function Pagination() {
  const { data, page, limit, filter, updateData } = useContext()

  const isItMinimun: boolean = useMemo(() => page === 1, [page])
  const isItMaximun: boolean = useMemo(() => data.length < limit, [data, limit])

  // Min page is zero
  const goBack = useCallback(() => {
    if (!isItMinimun) updateData(page - 1, limit, filter)
  }, [isItMinimun, page, limit, filter, updateData])

  // If It's maximun it shouldn't call 'next' because there's no more items
  const goNext = useCallback(() => {
    if (!isItMaximun) updateData(page + 1, limit, filter)
  }, [isItMaximun, page, limit, filter, updateData])

  const onChangeLimit = useCallback(({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const limit: number = Number(target.value)

    updateData(page, limit, filter)
  }, [page, filter, updateData])

  return (
    <Wrapper>
      <Button onClick={goBack} text='<' type='button' height='40px' width='40px' />

      <Select
        name='itemsPerPage'
        defaultValue={limit}
        onChange={onChangeLimit}
        options={[
          { value: ItemsPerPageEnum.FIVE, text: ItemsPerPageEnum.FIVE },
          { value: ItemsPerPageEnum.TEN, text: ItemsPerPageEnum.TEN },
        ]}
      />

      <Button onClick={goNext} text='>' type='button' height='40px' width='40px' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`


export default Pagination
