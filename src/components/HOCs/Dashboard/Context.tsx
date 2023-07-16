import { useState, createContext, useContext, useEffect, useCallback } from 'react'

import DashobardContext from '../../../ts/types/DashobardContext'
import GetJokesResponse from '../../../ts/interfaces/GetJokesResponse'
import useJokes, { JokesHookResponse } from './useJokes'
import ItemsPerPageEnum from '../../../ts/enums/ItemsPerPageEnum'

const Context = createContext<DashobardContext>({
  data: [],
  error: false,
  page: 1,
  limit: ItemsPerPageEnum.FIVE,
  updateData(){}
})

type Props = {
  children: React.ReactNode
}

export function ContextProvider({ children }: Props) {
  const [data, setData] = useState<GetJokesResponse['data']>([])
  const [error, setError] = useState<GetJokesResponse['error']>(null)
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<ItemsPerPageEnum>(ItemsPerPageEnum.FIVE)

  const [getJokes]: JokesHookResponse = useJokes()

  const updateData = useCallback(async (entryPage: number, entryLimit: ItemsPerPageEnum) => {
    const newPage: number = entryPage || page
    const newLimit: number = entryLimit || limit

    setPage(newPage)
    setLimit(newLimit)

    const { data, error }: GetJokesResponse  = await getJokes(newPage, newLimit)

    setData(data)
    setError(error)
  }, [page, limit])

  useEffect(() => {
    (() => updateData(1, ItemsPerPageEnum.FIVE))()
  }, [])

  return (
    <Context.Provider value={{ data, error: Boolean(error), updateData, page, limit }}>
      {children}
    </Context.Provider>
  )
}

export default () => useContext(Context)
