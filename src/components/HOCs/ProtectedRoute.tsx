import { useMemo } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({ children }: any) {
  const thereIsAToken = useMemo(() => localStorage.getItem('token'), [])

  if (!thereIsAToken) return <Navigate to='/' replace />

  return children || <Outlet />

}

export default ProtectedRoute
