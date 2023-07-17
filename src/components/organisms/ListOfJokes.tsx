import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Jokes from '../../ts/interfaces/Jokes'
import checkViewsAndParseToNumber from '../../utils/checkViewsAndParseToNumber'
import formatDate from '../../utils/formatDate'

type Props = {
  jokes: Jokes[],
}

function ListOfJokes({ jokes }: Props) {
  return (
    <Container>
      <TableRow hiddeRightLine>
        <h4>Title</h4>
        <h4>Author</h4>
        <h4>Created Date</h4>
        <h4>Views</h4>
      </TableRow>

      {jokes?.map((joke: Jokes) => (
        <TableRow key={joke?.id}>
          <Link to='/joke-form' state={{ joke }}>{joke?.title || 'Not defined'}</Link>
          <TableCell>{joke?.author || 'Not defined'}</TableCell>
          <TableCell>{formatDate(joke?.createdAt)}</TableCell>
          <ViewsColumn views={checkViewsAndParseToNumber(joke?.views)}>{joke?.views}</ViewsColumn>
        </TableRow>)
      )}
    </Container>
  )
}

// Fix styles to move to Cell and format date.

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  margin: auto;
  margin-bottom: 50px;
`

const TableRow = styled.div<{ hiddeRightLine?: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 200px) auto;

  *:not(:last-child) {
    margin-right: 15px;
    ${({ hiddeRightLine, theme }) => !hiddeRightLine && `border-right: 1px solid ${theme.side || 'black'};`}
  }
`

const TableCell = styled.p`
  padding-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ViewsColumn = styled.p<{ views: number }>`
  margin: 0;
  font-weight: 800;

  color: ${({ theme, views }: any) => {
    if (views >= 26 && views <= 50) return theme?.orange
    if (views >= 51 && views <= 75) return theme?.yellow
    if (views >= 76 && views <= 100) return theme?.green
    if (views >= 101) return theme.font

    return theme?.tomato
  }};
`

export default ListOfJokes
