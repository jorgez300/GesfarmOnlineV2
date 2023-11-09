
import { Button, Card, Collapse } from "react-bootstrap";
import { Product } from "../Model/Product";
import { useState } from "react";
import { Component } from "../Model/Component";
import IconoMal from '../Images/icons8-eliminar-escudo-40.png';
import IconoAdvertencia from '../Images/icons8-escudo-de-advertencia-40.png';
import IconoOk from '../Images/icons8-seguridad-comprobado-40.png';

export interface ProductProps {
    item: Product;
    origen: string;
    AgregarSeleccionado(origen: string, item: Product): void;
}


const ProductCard = (props: ProductProps) => {

    const [open, setOpen] = useState(false);


    const icono = () => {

        if (props.item.Minimo == 0 || props.item.Maximo == 0) {
            return (
                <img src={IconoAdvertencia} alt="Logo" />
            );
        }
        if (props.item.Existen > 0 && props.item.Existen >= props.item.Minimo && props.item.Existen <= props.item.Maximo) {
            return (
                <img src={IconoOk} alt="Logo" />
            );
        }
        if (props.item.Existen > 0 && props.item.Existen > props.item.Maximo) {
            return (
                <img src={IconoMal} alt="Logo" />
            );
        }
        if (props.item.Existen > 0 && props.item.Existen < props.item.Minimo) {
            return (
                <img src={IconoAdvertencia} alt="Logo" />
            );
        }
        if (props.item.Existen == 0) {
            return (
                <img src={IconoMal} alt="Logo" />
            );
        }

    }

    return (
        <Card key={"Btn" + props.origen + props.item.Codigo} className={(props.origen == "VP") ? "mt-1 mb-1 border border-success" : "mt-1 mb-1 border border-primary"}>
            <Card.Body>
                <table >
                    <tbody>
                        <tr><td><b>Codigo:</b> {props.item.Codigo}</td></tr>
                        <tr><td><b>Descripcion:</b> {props.item.Descripcion}</td></tr>
                        <tr><td><b>Existen:</b> {props.item.Existen}</td></tr>
                        <tr><td><b>Minimo:</b> {props.item.Minimo}</td></tr>
                        <tr><td><b>Maximo:</b> {props.item.Maximo}</td></tr>
                        <tr><td><b>Costo USD:</b> {props.item.CostoUsd}</td></tr>
                        <tr><td><b>Costo Bs:</b> {props.item.CostoBs}</td></tr>
                        <tr><td><b>Precio Bs:</b> {props.item.PrecioBs}</td></tr>
                    </tbody>
                </table>
                {icono()}
                <span>
                    <Button
                        className="w-50 "
                        variant={(props.origen == "VP") ? "success" : "primary"}
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        Principios Activos
                    </Button>
                    <Button
                        className="w-25 float-end"
                        variant={(props.origen == "VP") ? "success" : "primary"}
                        onClick={() => props.AgregarSeleccionado(props.origen, props.item)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        Agregar
                    </Button>
                </span>

                <Collapse in={open}>
                    <div>
                        <table >
                            <tbody>
                                {props.item.ListPrinAct.map((item: Component) => <tr key={props.origen + props.item.Codigo + item.Id + item.Dsc}><td> {item.Id} - {item.Dsc} </td></tr>)}
                            </tbody>
                        </table>
                    </div>

                </Collapse>
            </Card.Body>
        </Card>
    );

};

export default ProductCard;