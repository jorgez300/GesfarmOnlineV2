import { FunctionComponent } from "react"
import { Routes, Route } from "react-router-dom"
import Charts from "./GesfarmOnline/Charts/Charts"
import Inventory from "./GesfarmOnline/Inventory/Inventory"
import './GesfarmOnline/Charts/Styles/Charts.css';
import './GesfarmOnline/Common/Styles/Common.css';
import Menu from "./GesfarmOnline/Common/Components/Menu"


const App: FunctionComponent = () => {



  return (
    <>
      <Menu />

      <Routes>
        <Route path='/' element={<Charts />} />
        <Route path='/Graficos' element={<Charts />} />
        <Route path='/Inventario' element={<Inventory />} />
      </Routes>
    </>
  )
}

export default App
