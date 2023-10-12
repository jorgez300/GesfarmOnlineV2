import { Card } from "react-bootstrap";

const EmptyCard = () => {

    return (
        <Card className="border border-warning">
            <Card.Body>
                <h2>Sin registros</h2>
                <p>Si no se refleja el producto puede que el mismo no tenga datos para esta farmacia o no tenga un principio activo asignado</p>
            </Card.Body>
        </Card>
    );

};

export default EmptyCard;