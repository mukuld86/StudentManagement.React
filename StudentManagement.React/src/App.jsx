import ProtectedRoute from './pages/ProtectedRoute'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AddStudent from "./pages/AddStudent"
import Students from './pages/Students'
import Login from './pages/Login'
import EditStudent from "./pages/EditStudent";
import ProtectedLayout from "./components/ProtectedLayout";

function App() {

    return (
      <BrowserRouter>

            <Routes>

                <Route path="/" element={
                    <Navigate to="/login" />}
                />
                <Route path="/login" element={
                    <Login />}
                />

                <Route path="/students/add" element={
                    <ProtectedRoute>
                        <ProtectedLayout>
                            <AddStudent />
                        </ProtectedLayout>
                    </ProtectedRoute>
                    }
                />
                <Route path="/students/edit/:registrationNumber" element={
                    <ProtectedRoute>
                        <ProtectedLayout>
                            <EditStudent />
                        </ProtectedLayout>
                        </ProtectedRoute>
                    }
                />
                <Route path="/students" element={
                    <ProtectedRoute>
                        <ProtectedLayout>
                            <Students />
                        </ProtectedLayout>
                    </ProtectedRoute>}
                />

            </Routes>

        </BrowserRouter>
  )
}

export default App
