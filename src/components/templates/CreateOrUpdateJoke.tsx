import Button from '../atoms/Button'
import InputLabel from '../molecules/InputLabel'

type Props = {
  handleGoToHome: () => void,
  handleDelete: () => void,
  onSubmit: () => void,
}

function CreateOrUpdateJokeTemplate({ handleGoToHome, handleDelete, onSubmit }: Props): JSX.Element {
  return (
    <div>
      <Button onClick={handleGoToHome} text='x' />

      Form to update Joke or create a new one

      <div style={{ paddingTop: 100 }}>
        <InputLabel label='Title' name='title' />
        <InputLabel label='Body' name='body' />
        <InputLabel label='Author' name='author' />
        <InputLabel label='Views' name='views' type='number' />

        <Button onClick={onSubmit} text='submit' />
        <Button onClick={handleDelete} text='Delete' />
      </div>
    </div>
  )
}

export default CreateOrUpdateJokeTemplate
