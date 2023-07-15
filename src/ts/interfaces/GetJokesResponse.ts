import Jokes from './Jokes'

interface GetJokesResponse {
  data: Jokes[]
  error: null | Error
}

export default GetJokesResponse