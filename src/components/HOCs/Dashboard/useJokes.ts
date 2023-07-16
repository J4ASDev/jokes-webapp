import { useCallback } from 'react'

import GetJokesResponse from '../../../ts/interfaces/GetJokesResponse'

const API: string = process.env.REACT_APP_API || 'https://retoolapi.dev'

export type JokesHookResponse = [(page: number, limit: number) => Promise<GetJokesResponse>]

export default function useJokes(): JokesHookResponse {
  const getData = useCallback((page: number, limit: number): Promise<GetJokesResponse> => {    
    return fetch(`${API}/zu9TVE/jokes?_page=${page}&_limit=${limit}`)
      .then(async res => {
        const data = await res.json()

        if (res.status < 200 || res.status > 299) {
          throw new Error(data?.message)
        }

        return data
      })
      .then((data) => ({ data, error: null }))
      .catch((error) => ({ data: [], error }))
  }, [])

  return [getData]
}
