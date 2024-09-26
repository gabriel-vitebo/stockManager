import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/login'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}