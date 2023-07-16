import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { StylesThemeProvider } from './components/HOCs/ThemeProvider'
import ProtectedRoute from './components/HOCs/ProtectedRoute'
import LoginContainer from './containers/Login'
import DashboardContainer from './containers/Dashboard'
import CreateOrUpdateJokeContainer from './containers/CreateOrUpdateJoke'

function App() {
  return (
    <StylesThemeProvider>
      <Router>
        <Routes>
          <Route path='/' element={<LoginContainer />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<DashboardContainer />} />
            <Route path='/joke-form' element={<CreateOrUpdateJokeContainer />} />
          </Route>
        </Routes>
      </Router>
    </StylesThemeProvider>
  )
}

export default App
