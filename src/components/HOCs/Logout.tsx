import { useCallback } from 'react'

import { useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'

function Logout() {
  const navigate = useNavigate()

  // If there's an api call to trigger when logout, it shold be handle in this file.

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token')
    navigate('/')
  }, [])

  return (
    <Button
      onClick={handleLogout}
      text='Log out'
      width='130px'
      height='40px'
      type='button'
    />
  )
}

export default Logout
