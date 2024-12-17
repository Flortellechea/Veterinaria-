import * as readlineSync from 'readline-sync';
import { Veterinaria } from "../veterinaria/Veterinaria";
import { RedVeterinarias } from '../veterinaria/Veterinarias';
import { TextUtils } from '../Utils/TextUtils';

export class MenuSeleccionarVeterinaria {
    red: RedVeterinarias;

    constructor(red: RedVeterinarias) {
        this.red = red;
    }

    public listarVeterinarias() {
        TextUtils.consoleLinea();
        console.log(`  Red de Veterinarias`);
        TextUtils.consoleLinea();
        for (let index = 0; index < this.red.getVeterinarias().length; index++) {
            const vet:Veterinaria = this.red.getVeterinarias()[index];
            console.log(`     ${vet.id}  ${vet.nombre}`);
            TextUtils.consoleLinea();
        }
        TextUtils.consoleLinea();
    }

    questionVeterinaria(): Veterinaria | null {
        console.clear();
        console.log("Seleccione la Veterinaria:");
        this.listarVeterinarias();
        console.log("0 - Salir");
        const seleccion = Number(readlineSync.questionInt("Ingrese el numero de la veterinaria a seleccionar: "));

        if (seleccion === 0) {
            return null;
        }

        const veterinariaSeleccionada = this.red.getVeterinarias().find((vet) => vet.getId() == seleccion);

        if (!veterinariaSeleccionada) {
            console.log("Opción inválida. Intente de nuevo.");
            return this.questionVeterinaria();
        }

        return veterinariaSeleccionada;
    }
}
