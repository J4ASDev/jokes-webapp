import { useCallback, useMemo } from 'react'
import { useNavigate, useLocation  } from 'react-router-dom'
import { useFormContext } from 'react-hook-form'

import CreateOrUpdateAJokeForm from '../components/HOCs/CreateOrUpdateAJoke/Form'
import CreateOrUpdateJokeTemplate from '../components/templates/CreateOrUpdateJoke'
import useFetch, { HookResponse } from '../hooks/useFetch'

const API_JOKES: string = process.env.REACT_APP_API || 'https://retoolapi.dev/zu9TVE/jokes'

function CreateOrUpdateJokeContainer() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { handleSubmit } = useFormContext()

  const [_, getFetch]: HookResponse = useFetch()

  const isItUpdating: boolean = useMemo(() => Object.keys(state?.joke || {}).length >= 1, [state?.joke])

  const handleGoToHome = useCallback(() => navigate('/dashboard'), [])

  // Deleting API is not working, it says always: "Data did not have id field"
  const handleDelete = useCallback(async () => {
    const { joke } = state || {}

    const url: string = `${API_JOKES}/${joke?.id}`
    const options: RequestInit = {
      method: 'DELETE'
    }

    await getFetch(url, options)
  }, [state?.joke])

  const onSubmit = useCallback(
    handleSubmit((data: any) => {
      console.log('Dat: ', data)
    }),
    [handleSubmit]
  )
  
  return (
    <CreateOrUpdateJokeTemplate
      isItUpdating={isItUpdating}
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
