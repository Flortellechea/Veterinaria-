import { Persona } from "./Persona";

export class Cliente extends Persona {

    constructor(id: number, dni: number,  nombre: string, telefono: string) {
        super(id, dni, nombre, telefono);
    }

}