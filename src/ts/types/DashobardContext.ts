import ItemsPerPageEnum from '../enums/ItemsPerPageEnum'
import JokesSortEnum from '../enums/JokesSortEnum'
import Jokes from '../interfaces/Jokes'

export type DashboardUpdateDataType = {
  newPage?: number,
  newLimit?: ItemsPerPageEnum,
  newSortBy?: JokesSortEnum | '' | string,
}

type DashobardContext = {
  data: Jokes[],
  error: boolean,
  updateData: (options?: DashboardUpdateDataType) => void,
  updateError?: (err: Error | null) => void,
  page: number,
  limit: ItemsPerPageEnum,
  sortBy: JokesSortEnum | string
}

export default DashobardContext