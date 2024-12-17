export class Cliente {
    id: number;
    nombre: string;
    telefono: string;
    visitas: number;
    esVIP: boolean;

    constructor (nombre: string, telefono: string, visitas = 0) {
            this.nombre = nombre;
            this.telefono = telefono;
            this.visitas = visitas;
            this.esVIP = visitas >= 5;
        }
    
        incrementarVisitas(): void {
            this.visitas++;
            this.esVIP = this.visitas >= 5;
        }
    }
