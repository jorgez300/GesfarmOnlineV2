import { ChangeEvent, FunctionComponent, useEffect, useState } from "react"
import { Register } from "./Model/Register";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import DetailedView from "./Components/DetailedView";
import MixView from "./Components/MixView";


const Charts: FunctionComponent = () => {

    const [Center, SetCenter] = useState<string>("0");
    const [Data, setData] = useState<Register[]>([]);

    const OnFiltroChange = (event: ChangeEvent<HTMLSelectElement>) => {
        SetCenter(event.target.value.toString());
    }

    const Filtrar = () => {
        SetCenter("0");
        Register.GetData()
            .then((regs) => {
                setData(regs);
            });
    };

    useEffect(() => {
        Register.GetData()
            .then((regs) => {
                setData(regs);
            });
    }, []);

    const FilterView = () => {

        switch (Center) {
            case "VP": {
                return (
                    <DetailedView Regs={Data} Center={Center} />
                )
                break;
            }
            case "FFD": {
                return (
                    <DetailedView Regs={Data} Center={Center} />
                )
                break;
            }
            case "MIX": {
                return (
                    <MixView Regs={Data} Center={Center} />
                )
                break;
            }
            default: {
                return (
                    <></>
                )
                break;
            }
        }
    }

    return (
        <Container fluid style={{minWidth: "1000px"}}>
            <Row className="mt-1 mb-1">
                <Col xs={9}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Origen</InputGroup.Text>
                        <Form.Select
                            value={Center}
                            onChange={OnFiltroChange}
                        >
                            <option value="0">- Seleccione -</option>
                            <option value="MIX">Mixto</option>
                            <option value="VP">VP</option>
                            <option value="FFD">FFP</option>
                        </Form.Select>
                    </InputGroup>
                </Col>
                <Col xs={3}>
                    <Button as="input" type="button" value="Actualizar" variant="success" className="w-100" onClick={Filtrar} />
                </Col>
            </Row>
            {FilterView()}

        </Container>
    )
}

export default Charts


