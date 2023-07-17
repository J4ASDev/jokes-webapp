import { useCallback, useMemo } from 'react'
import { useNavigate, useLocation  } from 'react-router-dom'
import { useFormContext } from 'react-hook-form'

import CreateOrUpdateAJokeForm from '../components/HOCs/CreateOrUpdateAJoke/Form'
import CreateOrUpdateJokeTemplate from '../components/templates/CreateOrUpdateJoke'
import useFetch, { HookResponse } from '../hooks/useFetch'

const API_JOKES: string = process.env.REACT_APP_API || 'https://retoolapi.dev/zu9TVE/jokes'

// DELETE, POST AND PUT are not working.
// Those endpoints always say: "Data did not have id field".
// However as this is a test; `handleDelete` and `onSubmit` are acting as 'success'.

function CreateOrUpdateJokeContainer() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { handleSubmit } = useFormContext()

  const [, getFetch]: HookResponse = useFetch()

  const isItUpdating: boolean = useMemo(() => Object.keys(state?.joke || {}).length >= 1, [state?.joke])

  const handleGoToHome = useCallback(() => navigate('/dashboard'), [navigate])

  const handleDelete = useCallback(async () => {
    await getFetch(`${API_JOKES}/${state?.joke?.id}`, { method: 'DELETE' })

    navigate('/dashboard')
  }, [state?.joke, navigate, getFetch])

  const onSubmit = handleSubmit(async (data: any) => {
    const url: string = `${API_JOKES}${isItUpdating ? `/${state?.joke?.id}` : ''}`
    const options: RequestInit = {
      method: isItUpdating ? 'PUT' : 'POST',
      body: JSON.stringify(data)
    }

    await getFetch(url, options)

    navigate('/dashboard')
  })
  
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
