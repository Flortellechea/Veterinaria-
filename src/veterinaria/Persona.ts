import { Identificable } from "../Utils/IdUtils";

export class Persona implements Identificable {
    id: number
    dni: number;
    nombre: string;
    telefono: string;

    constructor(id: number, dni: number,  nombre: string, telefono: string) {
        this.id = id;
        this.dni = dni;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    
    getId(): number {
        return this.id;
    }

    getDni(): number {
        return this.dni;
    }

    getTelefono(): string {
        return this.telefono;
    }

    getNombre(): string {
        return this.nombre;
    }

    setTelefono(telefono:string) {
        this.telefono = telefono;
    }

    setNombre(nombre:string) {
        this.nombre = nombre;
    }
}