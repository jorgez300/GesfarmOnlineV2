export class Register {

    _id: string;
    rD_Unix: number;
    rD_Origen: string;
    rD_Fecha: string;
    rD_Factor: number;
    rD_Ventas: number;
    rD_Costos: number;
    rD_Utilidad: number;
    rD_Porc_Util: number;
    rD_Fact_Emit: number;
    rD_Art_Venta: number;
    rD_Monto_Venta: number;
    rD_Cant_Fallas: number;
    rD_Monto_Fallas: number;


    constructor() {
        this._id = "";
        this.rD_Unix = 0;
        this.rD_Origen = "";
        this.rD_Fecha = "";
        this.rD_Factor = 0;
        this.rD_Ventas = 0;
        this.rD_Costos = 0;
        this.rD_Utilidad = 0;
        this.rD_Porc_Util = 0;
        this.rD_Fact_Emit = 0;
        this.rD_Art_Venta = 0;
        this.rD_Monto_Venta = 0;
        this.rD_Cant_Fallas = 0;
        this.rD_Monto_Fallas = 0;
    }

    public static async GetData() { 

        const requestOptions: RequestInit = {
            method: 'POST',
            redirect: 'follow'
        };
    
        const response = await fetch("https://gesfarmonlinefunc.azurewebsites.net/api/GetDataOperacionesDiario?code=MJD8vQXyncJzvzxM2JlLRQRgq-NvMHm7_-MPDz55NBfIAzFuhnoEdw==", requestOptions);

        const regs: Register[] = await response.json();
        if (response.ok) {
            return regs;
        }
        else { 
            return [];
        }


    }

}