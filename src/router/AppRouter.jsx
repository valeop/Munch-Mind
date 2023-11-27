import { Route, Routes } from "react-router-dom"
import { Inicio, Ingresar, Registrar, CicloSuenio, PlanAccion, EstadoFisico} from "../pages"
import { Navbar } from "../components/Navbar";
import React from "react"
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Inicio />} />
        <Route path="ingresar" element={<Ingresar />} />
        <Route path="ciclosuenio" element={<CicloSuenio />} />
        <Route path="registrar" element={<Registrar />} />
        <Route path="planaccion" element={<PlanAccion />} />
        <Route path="estadofisico" element={<EstadoFisico />} />
      </Route>
    </Routes>
  )
}
