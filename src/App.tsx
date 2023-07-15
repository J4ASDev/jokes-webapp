import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoginContainer from './containers/Login'
import DashboardContainer from './containers/Dashboard'
import ProtectedRoute from './components/HOCs/ProtectedRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginContainer />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardContainer />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
