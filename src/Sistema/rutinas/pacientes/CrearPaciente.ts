import * as readlineSync from 'readline-sync';
import { TextUtils } from "../../../Utils/TextUtils";
import { Veterinaria } from "../../../veterinaria/Veterinaria";
import { RedVeterinarias } from "../../../veterinaria/Veterinarias";
import { RutinaEjecutable } from "../RutinaEjecutable";
import { IdUtils } from '../../../Utils/IdUtils';
import { Paciente } from '../../../veterinaria/Paciente';

export class CrearPacienteRutina implements RutinaEjecutable {

    vet: Veterinaria;
    red: RedVeterinarias;

    constructor(vet: Veterinaria, red: RedVeterinarias) {
        this.vet = vet;
        this.red = red;
    }

    ejecutarRutina(): boolean {
        console.clear();
        console.log("Crear Paciente:");
        TextUtils.consoleLinea();
        const dniDuenio: number = TextUtils.pedirNumeroObligatorio("Ingrese DNI del Duenio: ");
        const existente = this.red.getClientes().find((cli) => cli.dni == dniDuenio);
        if (existente) {
            const existeVet = this.vet.getClientesVeterinaria().find((idP) => idP == existente.getId());
            if (existeVet) {
                // aca puedo continuar
                const nombre = TextUtils.pedirTextoObligatorio("Ingrese nombre del Paciente: ");
                const especie: number = TextUtils.pedirNumeroObligatorio("Presione 1 si es Perro, 2 si es Gato o 3 si es exotico: ");
                let especieDesc = null;
                switch (especie) {
                    case 1:
                        especieDesc = 'Perro';
                        break;
                    case 2:
                        especieDesc = 'Gato';
                        break;
                    default:
                        especieDesc = 'Exotico';
                        break;
                }
                console.log(`Los datos ingresados son: Animal: ${especieDesc}, llamado ${nombre} perteneciente a ${existente.getNombre()}`);
                const opcion = readlineSync.question("Presione S para agregarlo a la Veterinaria, N si quiere reintentar, C cancelar:");
                if (opcion.toLowerCase() == 's') {
                    const IdPac = IdUtils.getProximoID(this.red.getPacientes());
                    const nuevo = new Paciente(IdPac, nombre, especieDesc, existente);
                    this.red.getPacientes().push(nuevo);
                    this.vet.getPacientesVeterinaria().push(nuevo.getId());
                    this.red.guardar();
                    return true;
                }
                if (opcion.toLowerCase() == 'n') {
                    return this.ejecutarRutina();
                }
                return false;
            } else {
                TextUtils.mensajeConEnter("El Duenio no se encuentra como cliente en esta veterinaria, primero debe crear el cliente en esta veterinaria");
                return false;
            }
        } else {
            TextUtils.mensajeConEnter("El Duenio no se encuentra como cliente en la red, primero debe crear el cliente en esta veterinaria");
            return false;
        }
    }
}