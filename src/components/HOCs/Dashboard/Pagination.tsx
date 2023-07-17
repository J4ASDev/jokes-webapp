import { useCallback, useMemo } from 'react'
import styled from 'styled-components'

import useContext from './Context'
import Button from '../../atoms/Button'
import ItemsPerPageEnum from '../../../ts/enums/ItemsPerPageEnum'

function Pagination() {
  const { data, page, limit, updateData } = useContext()

  const isItMinimun: boolean = useMemo(() => page === 1, [page])
  const isItMaximun: boolean = useMemo(() => data.length < limit, [data, limit])

  // Min page is zero
  const goBack = useCallback(() => {
    if (!isItMinimun) updateData({ newPage: page - 1 })
  }, [isItMinimun, page, limit])

  // If It's maximun it shouldn't call 'next' because there's no more items
  const goNext = useCallback(() => {
    if (!isItMaximun) return updateData({ newPage: page + 1 })
  }, [isItMaximun, page, limit])

  const onChangeLimit = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    updateData({ newLimit: Number(e.target.value) })
  }, [page])

  return (
    <Wrapper>
      <Button onClick={goBack} text='<' />

      <Select defaultValue={limit} onChange={onChangeLimit}>
        <option value={ItemsPerPageEnum.FIVE}>{ItemsPerPageEnum.FIVE}</option>
        <option value={ItemsPerPageEnum.TEN}>{ItemsPerPageEnum.TEN}</option>
      </Select>

      <Button onClick={goNext} text='>' />
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
