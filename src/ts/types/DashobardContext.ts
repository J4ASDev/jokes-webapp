import ItemsPerPageEnum from '../enums/ItemsPerPageEnum'
import Jokes from '../interfaces/Jokes'

type DashobardContext = {
  data: Jokes[],
  error: boolean,
  updateData: (page: ItemsPerPageEnum, limit: number) => void,
  updateError?: (err: Error | null) => void,
  page: number,
  limit: ItemsPerPageEnum
}

export default DashobardContext