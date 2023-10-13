import { Row } from "react-bootstrap";
import { Register } from "../Model/Register";
import { InfoDetailed } from "../Model/InfoDetailed";
import BarChart from "./BarChart";

export interface DetailedViewProps {
    Regs: Register[];
    Center: string;
}

const DetailedView = (props: DetailedViewProps) => {

    const dataDetailed = new InfoDetailed();
    dataDetailed.SetInfoDetailed(props.Regs, props.Center);

    return (
        <>
            <Row className="mt-1 mb-1">
                <BarChart
                    titulo="Acumulado Costo Venta"
                    labels={dataDetailed.Periodo}
                    title1="Costo"
                    dataset1={dataDetailed.Costo.map((item) => item)}
                    title2="Venta"
                    dataset2={dataDetailed.Venta.map((item) => item)}
                />
                <BarChart
                    titulo="Costo vs Utilidad"
                    labels={dataDetailed.Periodo}
                    title1="Costo"
                    dataset1={dataDetailed.Costo.map((item) => item)}
                    title2="Utilidad"
                    dataset2={dataDetailed.Utilidad.map((item) => item)}
                />
                <BarChart
                    titulo="Porcentaje de Utilidad"
                    labels={dataDetailed.Periodo}
                    title1="% Utilidad"
                    dataset1={dataDetailed.PorCentajeUtilidad.map((item) => item)}
                />
                <BarChart
                    titulo="Total Ventas Realizadas"
                    labels={dataDetailed.Periodo}
                    title1="Facturas"
                    dataset1={dataDetailed.Cantidad.map((item) => item)}
                />
                <BarChart
                    titulo="Articulo por venta"
                    labels={dataDetailed.Periodo}
                    title1="Facturas"
                    dataset1={dataDetailed.ArtVenta.map((item) => item)}
                />
                <BarChart
                    titulo="Items fallas"
                    labels={dataDetailed.Periodo}
                    title1="Items fallas"
                    dataset1={dataDetailed.ItemsFalla.map((item) => item)}
                />
                <BarChart
                    titulo="Monto fallas"
                    labels={dataDetailed.Periodo}
                    title1="Monto fallas"
                    dataset1={dataDetailed.CostoFalla.map((item) => item)}
                />
            </Row>
        </>
    )
}

export default DetailedView;