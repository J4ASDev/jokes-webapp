import { useMemo } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

function ProtectedRoute({ children }: any) {
  const thereIsAToken = useMemo(() => localStorage.getItem('token') || Cookies.get('token'), [])

  if (!thereIsAToken) return <Navigate to='/' replace />

  return children || <Outlet />

}

export default ProtectedRoute
