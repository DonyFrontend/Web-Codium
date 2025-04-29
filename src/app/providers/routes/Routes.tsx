import { RoutesObject } from "@/shared/config/router"
import { Route, Routes } from "react-router-dom"

const RoutesComponent = () => {
  return (
    <Routes>
      {Object.values(RoutesObject).map((route, index) => <Route path={route.path} element={route.element} key={index}/>)}
    </Routes>
  )
}

export { RoutesComponent }
