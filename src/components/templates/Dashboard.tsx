import styled from 'styled-components'

import useTheme from '../HOCs/ThemeProvider'
import Logout from '../HOCs/Logout'
import Pagination from '../HOCs/Dashboard/Pagination'
import Button from '../atoms/Button'
import ListOfJokes from '../organisms/ListOfJokes'
import Jokes from '../../ts/interfaces/Jokes'
import SearchFilter from '../HOCs/Dashboard/SearchFilter'

type Props = {
  data: Jokes[],
  error: boolean,
  goToAddNewJoke: () => void,
}

function DashboardTemplate({ data, error, goToAddNewJoke }: Props) {
  const { setMode } = useTheme()

  if (error) return <p>Ops, an error has occurred :(</p>

  return (
    <Wrapper>
      <Header>
        <Button
          onClick={goToAddNewJoke}
          text='Create joke'
          width='130px'
          height='40px'
          type='button'
         />
        <Button
          onClick={setMode}
          text='DarkMode'
          width='130px'
          height='40px'
          type='button'
        />
        <Logout />
      </Header>

      <Title>Welcome 👋 - Jokes</Title>
      <SearchFilter />
      <ListOfJokes jokes={data} />
      <Pagination />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: grid;
  gap: 25px;
`

const Header = styled.header`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 45px 0;
`

const Title = styled.h2`
  text-align: center;
  margin-top: 0px;
`

export default DashboardTemplate
