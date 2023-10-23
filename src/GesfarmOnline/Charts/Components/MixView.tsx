import { Register } from "../Model/Register";
import { InfoMix } from "../Model/InfoMix";
import LineChart from "./LineChart";
import { Row } from "react-bootstrap";


export interface MixViewProps {
    Regs: Register[];
    Center: string;
}


const MixView = (props: MixViewProps) => {

    const dataMix = new InfoMix();
    dataMix.SetInfoMix(props.Regs);

    return (
        <>
            <Row className="mt-1 mb-1">
                <LineChart
                    titulo="Mixto - Acumulado Venta"
                    labels={dataMix.Periodo}
                    datasetVP={dataMix.VP.map((item) => item.Venta)}
                    datasetFFD={dataMix.FFD.map((item) => item.Venta)}
                />
                <LineChart
                    titulo="Mixto - Porcentaje de Utilidad"
                    labels={dataMix.Periodo}
                    datasetVP={dataMix.VP.map((item) => item.PorCentajeUtilidad)}
                    datasetFFD={dataMix.FFD.map((item) => item.PorCentajeUtilidad)}
                />
                <LineChart
                    titulo="Mixto - Total Ventas Realizadas"
                    labels={dataMix.Periodo}
                    datasetVP={dataMix.VP.map((item) => item.Facturas)}
                    datasetFFD={dataMix.FFD.map((item) => item.Facturas)}
                />
                <LineChart
                    titulo="Mixto - Monto por venta"
                    labels={dataMix.Periodo}
                    datasetVP={dataMix.VP.map((item) => item.MtoXVenta)}
                    datasetFFD={dataMix.FFD.map((item) => item.MtoXVenta)}
                />
                <LineChart
                    titulo="Mixto - Items por venta"
                    labels={dataMix.Periodo}
                    datasetVP={dataMix.VP.map((item) => item.ArtVenta)}
                    datasetFFD={dataMix.FFD.map((item) => item.ArtVenta)}
                />
                <LineChart
                    titulo="Mixto - Items fallas"
                    labels={dataMix.Periodo}
                    datasetVP={dataMix.VP.map((item) => item.ItemsFalla)}
                    datasetFFD={dataMix.FFD.map((item) => item.ItemsFalla)}
                />
                <LineChart
                    titulo="Mixto - Costo fallas"
                    labels={dataMix.Periodo}
                    datasetVP={dataMix.VP.map((item) => item.CostoFalla)}
                    datasetFFD={dataMix.FFD.map((item) => item.CostoFalla)}
                />

            </Row>
        </>
    )
}

export default MixView;

