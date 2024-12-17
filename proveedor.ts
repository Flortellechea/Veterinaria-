
export class Proveedor {
    id: string;
    nombre: string;
    telefono: string;

    constructor(nombre: string, telefono: string) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}
