
import { Button, Card, Collapse } from "react-bootstrap";
import { Product } from "../Model/Product";
import { useState } from "react";
import { Component } from "../Model/Component";

export interface ProductProps {
    item: Product;
    origen: string;
}


const ProductCard = (props: ProductProps) => {

    const [open, setOpen] = useState(false);


    return (
        <Card key={"Btn" + props.origen + props.item.Codigo} className={(props.origen == "VP") ? "mt-1 mb-1 border border-success" : "mt-1 mb-1 border border-primary"}>
            <Card.Body>
                <table >
                    <tbody>
                        <tr><td><b>Codigo:</b> {props.item.Codigo}</td></tr>
                        <tr><td><b>Descripcion:</b> {props.item.Descripcion}</td></tr>
                        <tr><td><b>Existen:</b> {props.item.Existen}</td></tr>
                        <tr><td><b>Costo USD:</b> {props.item.CostoUsd}</td></tr>
                        <tr><td><b>Costo Bs:</b> {props.item.CostoBs}</td></tr>
                        <tr><td><b>Precio Bs:</b> {props.item.PrecioBs}</td></tr>
                    </tbody>
                </table>
                <Button
                    className="w-100"
                    variant={(props.origen == "VP") ? "success" : "primary"}
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    Principios Activos
                </Button>
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