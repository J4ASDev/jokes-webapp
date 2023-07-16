import { useCallback, useMemo } from 'react'
import styled from 'styled-components'

import useContext from './Context'
import Button from '../../atoms/Button'
import ItemsPerPageEnum from '../../../ts/enums/ItemsPerPageEnum'

function Pagination() {
  const { data, page, limit, updateData } = useContext()

  const isItMinimun: boolean = useMemo(() => page === 0, [page])
  const isItMaximun: boolean = useMemo(() => data.length < limit, [data, limit])

  // Min page is zero
  const goBack = useCallback(() => {
    if (!isItMinimun) updateData(page - 1, limit)
  }, [isItMinimun, page, limit])

  // If It's maximun it shouldn't call 'next' because there's no more items
  const goNext = useCallback(() => {
    if (!isItMaximun) return updateData(page + 1, limit)
  }, [isItMaximun, page, limit])

  const onChangeLimit = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    updateData(page, Number(e.target.value))
  }, [page])

  return (
    <Wrapper>
      <Button onClick={goBack} text='<' />

      <select defaultValue={limit} onChange={onChangeLimit}>
        <option value={ItemsPerPageEnum.FIVE}>{ItemsPerPageEnum.FIVE}</option>
        <option value={ItemsPerPageEnum.TEN}>{ItemsPerPageEnum.TEN}</option>
      </select>

      <Button onClick={goNext} text='>' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`

export default Pagination
