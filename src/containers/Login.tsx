import React, { useCallback } from 'react'

import LoginTemplate from '../components/templates/Login'
import { useNavigate } from 'react-router-dom'

const TOKEN = 'this-is-suppose-to-be-a-token-valid'

function LoginContainer() {
  const navigate = useNavigate()

  const handleSetToken = useCallback(() => {
    localStorage.setItem('token', TOKEN)
    navigate('/dashboard')
  }, [])

  return (
    <LoginTemplate handleSetToken={handleSetToken} />
  )
}

export default LoginContainer
