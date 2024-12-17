import * as readlineSync from 'readline-sync';
import { RedVeterinarias } from '../veterinaria/Veterinarias';
import { Veterinaria } from '../veterinaria/Veterinaria';
import { TextUtils } from '../Utils/TextUtils';
import { IdUtils } from '../Utils/IdUtils';

export class MenuCrearVeterinaria {
    red: RedVeterinarias;
    constructor(red: RedVeterinarias) {
        this.red = red;
    }

    public questionVeterinaria(): Veterinaria | null {
        console.clear();
        console.log("Crear Veterinaria:");
        TextUtils.consoleLinea();
        const nombre = readlineSync.question("Ingrese nombre de Veterinaria: ");
        const direccion = readlineSync.question("Ingrese direccion de Veterinaria: ");
        TextUtils.consoleLinea();
        console.log(`Sus datos ingresados son:  Veterinaria ${nombre} ubicada en ${direccion}`);
        const opcion = readlineSync.question("Presione S si es correcto, N si quiere reintentar, C cancelar: ");
        if (opcion.toLowerCase() == 's') {
            const idVet = IdUtils.getProximoID(this.red.getVeterinarias());
            return new Veterinaria(idVet, nombre, direccion);
        } 
        if (opcion.toLowerCase() == 'n') {
            return this.questionVeterinaria();
        } 
        return null;
    }
}