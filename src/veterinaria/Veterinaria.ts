import { Identificable } from "../Utils/IdUtils";

export class Veterinaria implements Identificable {
    id: number;
    nombre: string;
    direccion: string;
    clientesVeterinaria: number[];
    pacientesVeterinaria: number[];

    constructor(id: number, nombre: string, direccion: string) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientesVeterinaria = [];
        this.pacientesVeterinaria = [];
    }

    public getId(): number {
        return this.id;
    }
    public setId(id: number) {
        this.id = id;

    }

    public getnombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getDireccion(): string {
        return this.direccion;
    }
    public setDireccion(direccion: string) {
        return this.direccion = direccion;
    }

    public getClientesVeterinaria(): number[] {
        return this.clientesVeterinaria;
    }

    public getPacientesVeterinaria(): number[] {
        return this.pacientesVeterinaria;
    }

    public setClientesVeterinaria(clientesVeterinaria) {
        this.clientesVeterinaria = clientesVeterinaria;
    }

    public setPacientesVeterinaria(pacientesVeterinaria) {
        this.pacientesVeterinaria = pacientesVeterinaria;
    }
}
