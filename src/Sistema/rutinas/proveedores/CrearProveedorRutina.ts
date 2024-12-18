import * as readlineSync from 'readline-sync';
import { TextUtils } from "../../../Utils/TextUtils";
import { Veterinaria } from "../../../veterinaria/Veterinaria";
import { RedVeterinarias } from "../../../veterinaria/Veterinarias";
import { RutinaEjecutable } from "../RutinaEjecutable";
import { IdUtils } from '../../../Utils/IdUtils';
import { Proveedor } from '../../../veterinaria/Proveedor';

export class CrearProveedorRutina implements RutinaEjecutable {

    vet: Veterinaria;
    red: RedVeterinarias;

    constructor(vet: Veterinaria, red: RedVeterinarias) {
        this.vet = vet;
        this.red = red;
    }

    ejecutarRutina(): boolean {
        console.clear();
        console.log("Crear Proveedor:");
        TextUtils.consoleLinea();
        const nombre: string = TextUtils.pedirTextoObligatorio("Ingrese Nombre del Proveedor: ");
        const existente = this.red.getProveedores().find((prov) => prov.nombre == nombre);
        if (existente) {
            // el proveedor existe en la red
            const existeVet = this.vet.getProveedoresVeterinaria().find((idP) => idP == existente.getId());
            if (existeVet) {
                TextUtils.mensajeConEnter(`El proveedor ya se encuentra registrado como: ${existente.getNombre()}`);
                return false;
            } else {
                console.log(`El proveedor ya se encuentra registrado en la red como: ${existente.getNombre()}`);
                const opcion = readlineSync.question("Presione S si es para agregarlo a la veterinaria, N si quiere reintentar, C cancelar: ");
                if (opcion.toLowerCase() == 's') {
                    this.vet.getProveedoresVeterinaria().push(existente.getId());
                    this.red.guardar();
                    return true;
                }
                if (opcion.toLowerCase() == 'n') {
                    return this.ejecutarRutina();
                }
                return false;
            }
        }
        const telefono = TextUtils.pedirTextoObligatorio("Ingrese telefono del Proveedor: ");
        TextUtils.consoleLinea();
        console.log(`Sus datos ingresados son: Nombre: ${nombre}, Telefono: ${telefono}`);
        const opcion = readlineSync.question("Presione S si es correcto, N si quiere reintentar, C cancelar: ");
        if (opcion.toLowerCase() == 's') {
            const idProv = IdUtils.getProximoID(this.red.getProveedores());
            const nuevo = new Proveedor(idProv, nombre, telefono);
            this.red.getProveedores().push(nuevo);
            this.vet.getProveedoresVeterinaria().push(nuevo.getId());
            this.red.guardar();
            return true;
        }
        if (opcion.toLowerCase() == 'n') {
            return this.ejecutarRutina();
        }
        return false;
    }
}