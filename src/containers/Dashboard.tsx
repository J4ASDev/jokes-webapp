import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useContext, { ContextProvider } from '../components/HOCs/Dashboard/Context'
import DashboardTemplate from '../components/templates/Dashboard'
import DashboardForm from '../components/HOCs/Dashboard/Form'

function DashboardContainer() {
  const { data, error, updateData, limit, page, filter } = useContext()
  const navigate = useNavigate()

  const goToAddNewJoke = useCallback(() => navigate('/joke-form'), [navigate])

  useEffect(() => {
    updateData(page, limit, filter)
  }, [])

  return (
    <DashboardTemplate
      data={data}
      error={error}
      goToAddNewJoke={goToAddNewJoke}
    />
  )
}

function DashboardWrapper() {
  return (
    <ContextProvider>
      <DashboardForm>
        <DashboardContainer />
      </DashboardForm>
    </ContextProvider>
  )
}


export default DashboardWrapper
