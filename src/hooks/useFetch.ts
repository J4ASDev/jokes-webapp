import { useEffect, useState } from "react";

type Response = {
  data: null | any;
  error: null | Error | any;
};

export default  function (url: string, options?: RequestInit): Response {
  const [data, setData] = useState<Response['data']>(null)
  const [error, setError] = useState<Response['error']>(null)

  useEffect(() => {
      fetch(url, options)
        .then(res => res.json())
        .then((data) => setData(data))
        .catch((error) => setError(error))
  }, [])

  return { data, error }
}
