import { FunctionComponent, useState } from "react";
import { Button, Offcanvas, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const Menu: FunctionComponent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navegar = useNavigate();

    const handleClickInventario = () => navegar("/Inventario");
    const handleClickGraficos = () => navegar("/Graficos");

    return (
        <>
            <Button className="m-1 btnMenu" variant="secondary" onClick={handleShow}>
                Menu
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Gesfarm Online</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        <ListGroup.Item className="MenuItem" onClick={handleClickInventario}>Inventario</ListGroup.Item>
                        <ListGroup.Item className="MenuItem" onClick={handleClickGraficos}>Graficos</ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Menu;