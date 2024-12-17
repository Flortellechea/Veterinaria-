export class Paciente {
    id: number;
    nombre: string;
    especie: string;
    idDueno: string;

    constructor(id: number, nombre: string, especie: string, ) {
        this.id = id;
        this.nombre = nombre;
        this.especie = ['perro', 'gato'].includes(especie.toLowerCase()) ? especie : 'exótica';
    }

        public getId(id:number) {
            return this.id;
    }
        public setId(id:number) {
            return this.id = id;
    }
        public getnombre (): string {
            return this.nombre;
    }
        public setNombre (nombre:string) {
            this.nombre = nombre;
        }
    
        public getEspecie(): string {
            return this.especie;
    }
        public setEspecie(direccion:string) {
            return this.especie = direccion;
        }

}