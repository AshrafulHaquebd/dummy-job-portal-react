import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { auth } from '../firebase/firebase.config'

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()

  if (!user && !loading) {
    return (
      <p>
        <strong>Sign up to Continue.</strong>
      </p>
    )
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (!user) {
    return <Navigate to='/signup' state={{ from: location }} replace />
  }

  return <>{children}</>
}

export default PrivateRoute
