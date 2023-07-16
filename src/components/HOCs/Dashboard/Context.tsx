import { useState, createContext, useContext, useCallback } from 'react'

import useFetch, { HookResponse } from '../../../hooks/useFetch'
import DashobardContext, { DashboardUpdateDataType } from '../../../ts/types/DashobardContext'
import GetJokesResponse from '../../../ts/interfaces/GetJokesResponse'
import ItemsPerPageEnum from '../../../ts/enums/ItemsPerPageEnum'
import JokesSortEnum from '../../../ts/enums/JokesSortEnum'

const API_JOKES: string = process.env.REACT_APP_API || 'https://retoolapi.dev/zu9TVE/jokes'

const Context = createContext<DashobardContext>({
  data: [],
  error: false,
  page: 1,
  limit: ItemsPerPageEnum.FIVE,
  updateData(){},
  sortBy: ''
})

type Props = {
  children: React.ReactNode
}

export function ContextProvider({ children }: Props) {
  const [data, setData] = useState<GetJokesResponse['data']>([])
  const [error, setError] = useState<GetJokesResponse['error']>(null)

  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<ItemsPerPageEnum>(ItemsPerPageEnum.FIVE)
  const [sortBy, setSortBy] = useState<JokesSortEnum | string>('')

  const [_, getFetch]: HookResponse = useFetch()

  const updateData = useCallback(async (options?: DashboardUpdateDataType) => {
    const { newPage = page, newLimit = limit, newSortBy = '' } = options || {}

    if (newPage !== page) setPage(newPage)
    if (newLimit !== limit) setLimit(newLimit)
    if (newSortBy !== sortBy) setSortBy(newSortBy)

    const url: string = `${API_JOKES}/?_page=${newPage}&_limit=${newLimit}&_sort=${newSortBy}`

    const { data, error } = await getFetch(url)

    setData(data)
    setError(error)
  }, [page, limit, sortBy])

  return (
    <Context.Provider value={{ data, error: Boolean(error), updateData, page, limit, sortBy }}>
      {children}
    </Context.Provider>
  )
}

export default () => useContext(Context)
