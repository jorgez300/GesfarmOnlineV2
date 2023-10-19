import { Component } from "./Component";

export class Product {
    Codigo: string;
    CostoBs: number;
    CostoUsd: number;
    Descripcion: string;
    Existen: number;
    Minimo: number;
    Maximo: number;
    ListPrinAct: Component[];
    PrecioBs: number;

    constructor() {
        this.Codigo = "";
        this.CostoBs = 0;
        this.CostoUsd = 0;
        this.Descripcion = "";
        this.Existen = 0;
        this.Minimo = 0;
        this.Maximo = 0;
        this.ListPrinAct = [];
        this.PrecioBs = 0;

    }
}

