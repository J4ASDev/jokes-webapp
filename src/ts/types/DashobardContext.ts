import ItemsPerPageEnum from '../enums/ItemsPerPageEnum'
import Jokes from '../interfaces/Jokes'

type DashobardContext = {
  data: Jokes[],
  error: boolean,
  updateData: (page: number, limit: ItemsPerPageEnum, filter: string) => void,
  updateError?: (err: Error | null) => void,
  page: number,
  limit: ItemsPerPageEnum,
  filter: string,
}

export default DashobardContext