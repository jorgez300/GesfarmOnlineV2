import { Register } from "./Register";

export class InfoDetailed { 

    Periodo: string[];
    Facturas: number[];
    Venta: number[];
    MtoXVenta:number[];
    Costo:number[];
    Utilidad: number[];
    PorCentajeUtilidad: number[];
    Cantidad: number[];
    ItemsFalla: number[];
    CostoFalla: number[];

    constructor() {
        this.Periodo = [];
        this.Facturas = [];
        this.Venta = [];
        this.MtoXVenta = [];
        this.Costo = [];
        this.Utilidad = [];
        this.PorCentajeUtilidad = [];
        this.Cantidad = [];
        this.ItemsFalla = [];
        this.CostoFalla = [];
    }


    public SetInfoDetailed(regs: Register[], Origen: string) {


        regs.forEach((item) => {

            if (item.rD_Origen == Origen) { 

                this.Periodo.push(item.rD_Fecha);
                this.Facturas.push(item.rD_Fact_Emit);
                this.Venta.push(item.rD_Ventas);
                this.MtoXVenta.push(item.rD_Monto_Venta);
                this.Costo.push(item.rD_Costos);
                this.Utilidad.push(item.rD_Utilidad);
                this.PorCentajeUtilidad.push(item.rD_Porc_Util);
                this.Cantidad.push(item.rD_Fact_Emit);
                this.ItemsFalla.push(item.rD_Cant_Fallas);
                this.CostoFalla.push(item.rD_Monto_Fallas);

            }


        })


    }


}