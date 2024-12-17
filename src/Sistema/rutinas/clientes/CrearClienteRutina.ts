import * as readlineSync from 'readline-sync';
import { TextUtils } from "../../../Utils/TextUtils";
import { Veterinaria } from "../../../veterinaria/Veterinaria";
import { RedVeterinarias } from "../../../veterinaria/Veterinarias";
import { RutinaEjecutable } from "../RutinaEjecutable";
import { IdUtils } from '../../../Utils/IdUtils';
import { Cliente } from '../../../veterinaria/Cliente';

export class CrearClienteRutina implements RutinaEjecutable {

    vet: Veterinaria;
    red: RedVeterinarias;

    constructor(vet: Veterinaria, red: RedVeterinarias) {
        this.vet = vet;
        this.red = red;
    }

    ejecutarRutina(): boolean {
        console.clear();
        console.log("Crear Cliente:");
        TextUtils.consoleLinea();
        const dni: number = TextUtils.pedirNumeroObligatorio("Ingrese DNI de Cliente: ");
        const existente = this.red.getClientes().find((cli) => cli.dni == dni);
        if (existente) {
            console.log(`El cliente ya se encuentra registrado como: ${existente.getNombre()}`)
        }
        const nombre = TextUtils.pedirTextoObligatorio("Ingrese nombre de Cliente: ");
        readlineSync.question("Ingrese nombre de Cliente: ");
        const telefono = TextUtils.pedirTextoObligatorio("Ingrese telefono de Cliente: ");
        TextUtils.consoleLinea();
        console.log(`Sus datos ingresados son: dni: ${dni}, nombre: ${nombre}, telefono: ${telefono}`);
        const opcion = readlineSync.question("Presione S si es correcto, N si quiere reintentar, C cancelar: ");
        if (opcion.toLowerCase() == 's') {
            const idCli = IdUtils.getProximoID(this.red.getClientes());
            const nuevo = new Cliente(idCli, dni, nombre, telefono);
            this.red.getClientes().push(nuevo);
            this.vet.getClientesVeterinaria().push(nuevo.getId());
            this.red.guardar();
            return true;
        }
        if (opcion.toLowerCase() == 'n') {
            return this.ejecutarRutina();
        }
        return false;
    }
}