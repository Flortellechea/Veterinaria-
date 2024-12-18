import * as readlineSync from 'readline-sync';
import { TextUtils } from "../../../Utils/TextUtils";
import { Veterinaria } from "../../../veterinaria/Veterinaria";
import { RedVeterinarias } from "../../../veterinaria/Veterinarias";
import { RutinaEjecutable } from "../RutinaEjecutable";

export class EliminarClienteRutina implements RutinaEjecutable {

    vet: Veterinaria;
    red: RedVeterinarias;

    constructor(vet: Veterinaria, red: RedVeterinarias) {
        this.vet = vet;
        this.red = red;
    }

    ejecutarRutina(): boolean {
        console.clear();
        console.log("Eliminar Cliente:");
        TextUtils.consoleLinea();
        const dni: number = TextUtils.pedirNumeroObligatorio("Ingrese DNI de Cliente a modificar: ");
        const existente = this.red.getClientes().find((cli) => cli.dni == dni);
        if (existente) {
            console.log(`Esta seguro de eliminar: ${existente.getNombre()}`);
            const opcion = readlineSync.question("Presione S si es correcto, N si quiere reintentar, C cancelar: ");
            if (opcion.toLowerCase() == 's') {
                const nuevoArrFiltrado = this.vet.getClientesVeterinaria().filter((cliId) => cliId != existente.getId());
                this.vet.setClientesVeterinaria(nuevoArrFiltrado);
                this.red.guardar();
                TextUtils.mensajeConEnter("Cliente eliminado exitosamente");
                return true;
            }
            if (opcion.toLowerCase() == 'n') {
                return this.ejecutarRutina();
            }
        } else {
            TextUtils.mensajeConEnter(`No se encuentra cliente con el DNI ingresado`);
            return false;
        }
        return false;
    }
}