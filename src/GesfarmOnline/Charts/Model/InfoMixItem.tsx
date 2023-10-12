export class InfoMixItem {

    Facturas: number;
    Venta: number;
    MtoXVenta: number;
    PorCentajeUtilidad: number;
    Cantidad: number;
    ItemsFalla: number;
    CostoFalla: number;

    constructor(
        _Facturas: number,
        _Venta: number,
        _MtoXVenta: number,
        _PorCentajeUtilidad: number,
        _Cantidad: number,
        _ItemsFalla: number,
        _CostoFalla: number,
    ) {
        this.Facturas = _Facturas;
        this.Venta = _Venta;
        this.MtoXVenta = _MtoXVenta;
        this.PorCentajeUtilidad = _PorCentajeUtilidad;
        this.Cantidad = _Cantidad;
        this.ItemsFalla = _ItemsFalla;
        this.CostoFalla = _CostoFalla;
    }

}