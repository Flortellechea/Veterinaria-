import { Identificable } from "../Utils/IdUtils";
import { Persona } from "./Persona";

export class Paciente implements Identificable{
    id: number;
    nombre: string;
    especie: string;
    duenio: Persona;

    constructor(id: number, nombre: string, especie: string, duenio: Persona) {
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
        this.duenio = duenio;
    }

    getId(): number {
        return this.id;
    }
    getNombre(): string {
        return this.nombre;
    }
    getEspecie(): string {
        return this.especie;
    }
    getDuenio(): Persona {
        return this.duenio;
    }
    
    setNombre(nombre:string) {
        this.nombre=nombre;
    }


    }


