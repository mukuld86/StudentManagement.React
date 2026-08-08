import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'
import Students from './pages/Students'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

    return (
      <BrowserRouter>

            <Routes>

                <Route path="/login" element={<Login />} />

                <Route path="/students" element={
                    <ProtectedRoute>
                        <Students />
                    </ProtectedRoute>
                } />

            </Routes>

        </BrowserRouter>
  )
}

export default App
