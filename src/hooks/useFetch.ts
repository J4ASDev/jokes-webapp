import { useCallback, useState } from 'react'

type Response = {
  data: null | any;
  error: null | Error | any;
}

export type HookResponse = [Response, (url: string, options?: RequestInit) => Promise<any>]

export default function useFetch(): HookResponse {
  const [data, setData] = useState<Response['data']>(null)
  const [error, setError] = useState<Response['error']>(null)

  const getData = useCallback(async (url: string, options?: RequestInit): Promise<any> => {    
    return await fetch(url, options)
      .then(async res => {
        const data = await res.json()

        if (res.status < 200 || res.status > 299) {
          throw new Error(data?.message)
        }

        return data
      })
      .then((data) => {
        setData(data)
        setError(null)

        return { data, error: null }
      })
      .catch((error) => {
        setData([])
        setError(error)

        return { data: [], error }
      })
  }, [])

  return [{ data, error }, getData]
}
