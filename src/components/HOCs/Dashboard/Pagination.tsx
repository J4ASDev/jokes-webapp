import { useCallback, useMemo } from 'react'
import styled from 'styled-components'

import useContext from './Context'
import Button from '../../atoms/Button'
import ItemsPerPageEnum from '../../../ts/enums/ItemsPerPageEnum'

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
      <Button onClick={goBack} text='<' type='button' />

      <Select defaultValue={limit} onChange={onChangeLimit}>
        <option value={ItemsPerPageEnum.FIVE}>{ItemsPerPageEnum.FIVE}</option>
        <option value={ItemsPerPageEnum.TEN}>{ItemsPerPageEnum.TEN}</option>
      </Select>

      <Button onClick={goNext} text='>' type='button' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

const Select = styled.select`
  width: 200px;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
`
export default Pagination
