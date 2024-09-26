import { Route, Routes } from 'react-router-dom'
import { Register } from '../pages/register'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  )
}