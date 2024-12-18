import { Persona } from "./Persona";

export class Cliente extends Persona {

    esVip: boolean;

    constructor(id: number, dni: number,  nombre: string, telefono: string, esVip: boolean) {
        super(id, dni, nombre, telefono,);
        this.esVip = esVip;
    }
    
    public getEsVip(): boolean {
        return this.esVip;
    }
    
    public setEsVip(esVip: boolean): void {
        this.esVip = esVip;
    }

}