import { useCallback, useMemo } from 'react'
import { useNavigate, useLocation  } from 'react-router-dom'
import { useFormContext } from 'react-hook-form'

import CreateOrUpdateAJokeForm from '../components/HOCs/CreateOrUpdateAJokeForm'
import CreateOrUpdateJokeTemplate from '../components/templates/CreateOrUpdateJoke'

function CreateOrUpdateJokeContainer() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { handleSubmit } = useFormContext()

  const handleGoToHome = useCallback(() => navigate('/dashboard'), [])

  const handleDelete = useCallback(() => console.log(state?.joke?.id), [state?.joke?.id])
  
  const onSubmit = useCallback(
    handleSubmit((data: any) => {
      console.log('Dat: ', data)
    }),
    [handleSubmit]
  )
  
  return (
    <CreateOrUpdateJokeTemplate
      handleGoToHome={handleGoToHome}
      handleDelete={handleDelete}
      onSubmit={onSubmit}
    />
  )
}

function CreateOrUpdateJokeWrapper() {
  const { state } = useLocation()

  const defaultValues = useMemo(() => state?.joke, [state])

  return (
    <CreateOrUpdateAJokeForm defaultValues={defaultValues}>
      <CreateOrUpdateJokeContainer />
    </CreateOrUpdateAJokeForm>
  )
}

export default CreateOrUpdateJokeWrapper
