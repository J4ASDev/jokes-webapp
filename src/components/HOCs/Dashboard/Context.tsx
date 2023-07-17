import { useState, createContext, useContext, useCallback } from 'react'

import useFetch, { HookResponse } from '../../../hooks/useFetch'
import DashobardContext from '../../../ts/types/DashobardContext'
import GetJokesResponse from '../../../ts/interfaces/GetJokesResponse'
import ItemsPerPageEnum from '../../../ts/enums/ItemsPerPageEnum'

const API_JOKES: string = process.env.REACT_APP_API || 'https://retoolapi.dev/zu9TVE/jokes'

const Context = createContext<DashobardContext>({
  data: [],
  error: false,
  page: 1,
  limit: ItemsPerPageEnum.FIVE,
  updateData(){},
  filter: '',
})

type Props = {
  children: React.ReactNode
}

export function ContextProvider({ children }: Props) {
  const [data, setData] = useState<GetJokesResponse['data']>([])
  const [error, setError] = useState<GetJokesResponse['error']>(null)

  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<ItemsPerPageEnum>(ItemsPerPageEnum.FIVE)
  const [filter, setFilter] = useState<string>('')

  const [, getFetch]: HookResponse = useFetch()

  const updateData = useCallback(async (newPage: number, newLimit: ItemsPerPageEnum, newFilter: string) => {
    if (newPage !== page) setPage(newPage)
    if (newLimit !== limit) setLimit(newLimit)
    if (newFilter !== filter) setFilter(newFilter)

    const url: string = `${API_JOKES}/?_page=${newPage}&_limit=${newLimit}${newFilter}`

    const { data, error } = await getFetch(url)

    setData(data)
    setError(error)
  }, [page, limit, filter, getFetch])

  return (
    <Context.Provider value={{ data, error: Boolean(error), updateData, page, limit, filter }}>
      {children}
    </Context.Provider>
  )
}

export default function useDashboardContext() {
  return useContext(Context)
}
