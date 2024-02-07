import { ChangeEvent, FunctionComponent, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Charts from "./GesfarmOnline/Charts/Charts"
import Inventory from "./GesfarmOnline/Inventory/Inventory"
import './GesfarmOnline/Charts/Styles/Charts.css';
import './GesfarmOnline/Common/Styles/Common.css';
import Menu from "./GesfarmOnline/Common/Components/Menu"
import { Modal, Button, InputGroup, Form, Row } from "react-bootstrap";


const App: FunctionComponent = () => {

  const [show, setShow] = useState(true);
  const [Clave, setClave] = useState<string>("");

  const OnClaveChange = (event: ChangeEvent<HTMLInputElement>) => {
    setClave(event.target.value.toString());
  }


  const handleClose = () => {
    setShow((Clave.toUpperCase() != 'FARMA123'));
  }



  return (
    <>
      <Menu />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Acceso</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Row className="mt-1 mb-3">
              <h3>Ingrese clave de acceso para desbloquear</h3>      
          </Row>
          <Row className="mt-3 mb-1">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                Clave
              </InputGroup.Text>
              <Form.Control
                type="password"
                aria-describedby="basic-addon1"
                onChange={OnClaveChange}
                value={Clave}
              />
            </InputGroup>
          </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Entrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Routes>
        <Route path='/' element={<Inventory />} />
        <Route path='/Graficos' element={<Charts />} />
        <Route path='/Inventario' element={<Inventory />} />
      </Routes>
    </>
  )
}

export default App
