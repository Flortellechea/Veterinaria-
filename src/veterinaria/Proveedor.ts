import { Persona } from "./Persona";

export class Proveedor extends Persona {

    constructor(id: number,  nombre: string, telefono: string) {
        super(id, 0,  nombre, telefono);
    }

}