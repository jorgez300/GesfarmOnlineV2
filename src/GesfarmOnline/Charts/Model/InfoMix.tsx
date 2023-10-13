import { InfoMixItem } from "./InfoMixItem";
import { Register } from "./Register";

export class InfoMix {

    Periodo: string[];
    VP: InfoMixItem[];
    FFD: InfoMixItem[];


    constructor() {
        this.Periodo = [];
        this.VP = [];
        this.FFD = [];
    }


    public SetInfoMix(regs: Register[]) {
        regs.forEach((item) => {

            if (!this.Periodo.includes(item.rD_Fecha)) { 
                this.Periodo.push(item.rD_Fecha);
            }

            if (item.rD_Origen == "VP") {   
                
                this.VP.push(new InfoMixItem(
                    item.rD_Fact_Emit,
                    item.rD_Ventas,
                    item.rD_Monto_Venta,
                    item.rD_Art_Venta,
                    item.rD_Porc_Util,
                    item.rD_Art_Venta,
                    item.rD_Cant_Fallas,
                    item.rD_Monto_Fallas
                ));
            }
            if (item.rD_Origen == "FFD") {
                this.FFD.push(new InfoMixItem(
                    item.rD_Fact_Emit,
                    item.rD_Ventas,
                    item.rD_Monto_Venta,
                    item.rD_Art_Venta,
                    item.rD_Porc_Util,
                    item.rD_Art_Venta,
                    item.rD_Cant_Fallas,
                    item.rD_Monto_Fallas
                ));
            }

        })

    }



}