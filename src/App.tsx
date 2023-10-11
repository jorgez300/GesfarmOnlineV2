import { FunctionComponent } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Charts from "./GesfarmOnline/Charts/Charts"
import Inventory from "./GesfarmOnline/Inventory/Inventory"


const App: FunctionComponent = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inventory />} />
        <Route path='/Graficos' element={<Charts />} />
        <Route path='/Inventario' element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
