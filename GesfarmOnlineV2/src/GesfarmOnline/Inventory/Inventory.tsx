import { ChangeEvent, FunctionComponent, useEffect, useState } from "react"
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Product } from "./Model/Product";
import ProductCard from "./Components/ProductCard";




const Inventory: FunctionComponent = () => {

    const [dataVP, setdataVP] = useState<Product[]>();
    const [dataFFD, setdataFFD] = useState<Product[]>();

    const [labelVP, setlabelVP] = useState<string>("");
    const [labelFFD, setlabelFFD] = useState<string>("");

    const [Filtro, setFiltro] = useState<string>("");

    const [dataFiltradaVP, setdataFiltradaVP] = useState<Product[]>();
    const [dataFiltradaFFD, setdataFiltradaFFD] = useState<Product[]>();


    const GetListaInventariosComp = () => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "Carpeta": "Inventario"
        });

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://gesfarmonlinefunc.azurewebsites.net/api/GetInventario?code=X2Ht1SvYpBIG475OHuORr1r_C5Y5VsLMExHvnnzvOuKfAzFuidCBaw==", requestOptions)
            .then(response => response.json())
            .then(result => {
                GetDetalleInventariosComp(result[0], setdataFFD, setlabelFFD);
                GetDetalleInventariosComp(result[1], setdataVP, setlabelVP);
            })
            .catch(error => console.log('error', error));
    }

    const GetDetalleInventariosComp = (URL: string, Callback: React.Dispatch<React.SetStateAction<Product[] | undefined>>, LabelCallback: React.Dispatch<React.SetStateAction<string>>) => {

        const requestOptions: RequestInit = {
            method: 'GET',
            redirect: 'follow',
            cache: 'no-store'
        };

        fetch(URL + "?abcde", requestOptions)
            .then(response => {
                LabelCallback(FormatFecha(new Date(response.headers.get('Last-Modified')!), "-"));
                response.json()
                    .then(result => {
                        Callback(result);
                    })
            })
            .catch(error => console.log('error', error));
    }

    const FormatFecha = (d: (Date | null), separador: string) => {

        let month: string = "";
        let day: string = "";
        let year: number = 0;

        let hour: string = '';
        let min: string = '';

        if (d == null) {
            d = new Date();
            month = '' + (d.getMonth() + 1);
            day = '' + d.getDate();
            year = d.getFullYear();

            hour = '' + (d.getHours());
            min = '' + (d.getMinutes());
        }
        else {
            month = '' + (d.getMonth() + 1);
            day = '' + d.getDate();
            year = d.getFullYear();

            hour = '' + (d.getHours());
            min = '' + (d.getMinutes());
        }


        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        if (hour.length < 2)
            hour = '0' + hour;
        if (min.length < 2)
            min = '0' + min;

        return [day, month, year].join(separador) + " " + hour + ":" + min;
    }

    const OnFiltroChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFiltro(event.target.value.toString());
    }

    const Filtrar = () => {

        const SelVP: Product[] = [];
        const SelFFD: Product[] = [];

        if (Filtro.length <= 3) {

            alert("error");
            return;
        }

        dataVP!.forEach((item) => {

            if (item.Codigo.toUpperCase() == Filtro.toUpperCase() || item.Descripcion.toUpperCase().includes(Filtro.toUpperCase())) {
                SelVP.push(item);
            }
            else {
                item.ListPrinAct.forEach((pa) => {
                    if (pa.Dsc.toUpperCase().includes(Filtro.toUpperCase())) {
                        SelVP.push(item);
                    }
                })
            }
        })

        dataFFD!.forEach((item) => {

            if (item.Codigo.toUpperCase() == Filtro.toUpperCase() || item.Descripcion.toUpperCase().includes(Filtro.toUpperCase())) {
                SelFFD.push(item);
            }
            else {
                item.ListPrinAct.forEach((pa) => {
                    if (pa.Dsc.toUpperCase().includes(Filtro.toUpperCase())) {
                        SelFFD.push(item);
                    }
                })
            }
        })

        setdataFiltradaFFD(SelFFD);
        setdataFiltradaVP(SelVP);
    }

    useEffect(() => {
        GetListaInventariosComp();
    }, []);


    return (
        <Container fluid>
            <Row className="mt-1 mb-1">
                <Col xs={9}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Producto / Principio Activo</InputGroup.Text>
                        <Form.Control
                            aria-describedby="basic-addon1"
                            onChange={OnFiltroChange}
                        />
                    </InputGroup>
                </Col>
                <Col xs={3}>
                    <Button as="input" type="button" value="Filtrar" variant="success" className="w-100" onClick={Filtrar} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>FFD   {labelFFD}</h1>
                </Col>
                <Col>
                    <h1>VP   {labelVP}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        dataFiltradaFFD?.map((item: Product) => {
                            return (
                                <ProductCard
                                item={item} />
                            );
                        })
                    }
                </Col>
                <Col>
                    {
                        dataFiltradaVP?.map((item: Product) => {
                            return (
                                <ProductCard
                                    item={item} />
                            );
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Inventory;


