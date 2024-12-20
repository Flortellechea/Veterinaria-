import { TextUtils } from "../../../Utils/TextUtils";
import { Veterinaria } from "../../../veterinaria/Veterinaria";
import { RedVeterinarias } from "../../../veterinaria/Veterinarias";
import { RutinaEjecutable } from "../RutinaEjecutable";
import { Paciente } from '../../../veterinaria/Paciente';

export class ListarPacienteRutina implements RutinaEjecutable {

    vet: Veterinaria;
    red: RedVeterinarias;
    pac: Paciente;

    constructor(vet: Veterinaria, red: RedVeterinarias) {
        this.vet = vet;
        this.red = red;
    }

    ejecutarRutina(): boolean {
        console.clear();
        TextUtils.bannerVeterinaria(this.vet);
        console.log("Lista de Pacientes:");
        TextUtils.consoleLinea();
        for (let index = 0; index < this.vet.getPacientesVeterinaria().length; index++) {
            const IdPac:number = this.vet.getPacientesVeterinaria()[index];
            const paciente:Paciente = this.red.getPacientes().find((pac) => pac.getId() == IdPac);
            if (paciente) {
                console.log(`   ${paciente.getId()} | ${paciente.getNombre()} | ${paciente.getEspecie()} | ${paciente.getDuenio().getNombre()} `);
                TextUtils.consoleLinea();
            }
        }
        TextUtils.consoleLinea();
        TextUtils.esperarTecla();
        return true;
    }
}