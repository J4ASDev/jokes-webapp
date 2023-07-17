import styled from 'styled-components'

import Button from '../atoms/Button'
import InputLabel from '../molecules/InputLabel'

type Props = {
  isItUpdating: boolean,
  handleGoToHome: () => void,
  handleDelete: () => void,
  onSubmit: () => void,
}

function CreateOrUpdateJokeTemplate({
  isItUpdating,
  handleGoToHome,
  handleDelete,
  onSubmit
}: Props): JSX.Element {
  return (
    <Wrapper>
      <Header>
        <Icon className='fa fa-angle-left' onClick={handleGoToHome} />
        <Title>{isItUpdating ? 'Update Joke' : 'Create Jokes'} 🤡</Title>
      </Header>

      <FormContent>
        <InputLabel label='Id' name='id' />
        <InputLabel label='Title' name='title' />
        <InputLabel label='Body' name='body' />
        <InputLabel label='Author' name='author' />
        <InputLabel label='Views' name='views' type='number' />
        <InputLabel label='Created Date' name='createdAt' />
      </FormContent>

      <Footer>
        <Button onClick={onSubmit} text='Submit' type='submit' styledtype='primary' />
        <Button
          disabled={!isItUpdating}
          onClick={handleDelete}
          text='Delete'
          type='button'
          styledtype='error'
        />
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 350px;
`

const Title = styled.h4`
  font-size: 24px;
  margin: 0px;
`

const Icon = styled.i`
  font-size:36px;
  cursor: pointer;
`

const FormContent = styled.div`
  width: 350px;
  padding: 50px 0;
`

const Footer = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  gap: 25px;
`


export default CreateOrUpdateJokeTemplate
