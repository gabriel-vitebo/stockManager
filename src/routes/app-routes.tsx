import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Home } from '../pages/Home'
import {Details} from "../pages/Details.tsx";
import {Edit} from "../pages/Edit.tsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/session" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}