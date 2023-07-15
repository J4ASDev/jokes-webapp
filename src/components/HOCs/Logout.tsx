import React, { useCallback } from 'react'

import { useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'

function Logout() {
  const navigate = useNavigate()

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token')
    navigate('/')
  }, [])

  return (
    <Button onClick={handleLogout} text='Log out' />
  )
}

export default Logout
