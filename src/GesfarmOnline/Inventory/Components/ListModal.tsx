import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { Product } from "../Model/Product";

export interface ListModalProps {
    items: Product[];
    modalShow: boolean;
    setModalShow(value: boolean): void | undefined;
    DeleteSeleccionado(codigo: string): void | undefined;
    LimpiarSeleccionado(): void | undefined;
}

const ListModal = (props: ListModalProps) => {

    const GetTotal = (): string => {

        let x = 0;

        props.items.forEach((item: Product) => {

            x += item.PrecioBs;

        })

        return x.toFixed(2);

    }

    return (
        <Modal show={props.modalShow}
            onHide={() => props.setModalShow(false)}
            dialogClassName="modal-90w"
            scrollable
            aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Listado de productos seleccionados
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ maxHeight: '650px' }}>
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            <Table className="w-100" striped bordered hover responsive>

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Origen</th>
                                        <th>Codigo</th>
                                        <th>Descripcion</th>
                                        <th>Precio Bs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.items.map((item) => {
                                        return (
                                            <tr className={(item.Origen == "VP") ? "table-success" : "table-primary"}>
                                                <td><Button
                                                    variant="danger"
                                                    onClick={() => props.DeleteSeleccionado(item.Codigo)}
                                                >Eliminar</Button></td>
                                                <td>{item.Origen}</td>
                                                <td>{item.Codigo}</td>
                                                <td>{item.Descripcion}</td>
                                                <td>{item.PrecioBs}</td>
                                            </tr>)
                                    })}

                                    <tr>
                                        <th colSpan={4}>Total</th>
                                        <th>{GetTotal()}</th>
                                    </tr>
                                </tbody>
                            </Table>

                        </Col>

                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>

                <Container fluid>
                    <Row>
                        <Col xs={4}>
                        </Col>
                        <Col xs={4}>
                            <Button
                                className="w-100"
                                variant="success"
                                onClick={() => props.setModalShow(false)}>Cerrar</Button>
                        </Col>
                        <Col xs={4}>
                            <Button
                                className="w-100"
                                variant="danger"
                                onClick={() => props.LimpiarSeleccionado()}>Limpiar</Button>
                        </Col>
                    </Row>
                </Container>


            </Modal.Footer>
        </Modal>
    );

};

export default ListModal;