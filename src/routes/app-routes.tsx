import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/login'
import { Register } from '../pages/register'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/session" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}