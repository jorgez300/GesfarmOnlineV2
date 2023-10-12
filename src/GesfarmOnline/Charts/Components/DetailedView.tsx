import { Row, Col } from "react-bootstrap";
import { Register } from "../Model/Register";

export interface DetailedViewProps { 
    Regs: Register[];
    Center: string;
}

const DetailedView = (props: DetailedViewProps) => { 

    return (
        <>
            <Row className="mt-1 mb-1">
                <Col xs={12}>
                    <h1>{ props.Center }</h1>
                </Col>
            </Row>
        </>
    )
}

export default DetailedView;