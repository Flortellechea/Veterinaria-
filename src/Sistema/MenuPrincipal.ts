import * as readlineSync from 'readline-sync';
import { RedVeterinarias } from '../veterinaria/Veterinarias';
import { MenuCrearVeterinaria } from './MenuCrearVeterinaria';
import { TextUtils } from '../Utils/TextUtils';
import { MenuVeterinaria } from './MenuVeterinaria';
import { MenuSeleccionarVeterinaria } from './MenuSeleccionarVeterinaria';

export class MenuPricipal {
    red: RedVeterinarias;
    constructor(red: RedVeterinarias) {
        this.red = red;
    }

    public desplegarMenu(): boolean {
        console.clear();
        console.log("Seleccione opcion para operar");
        console.log("1 - Listar verterinarias");
        console.log("2 - Seleccionar veterinaria");
        console.log("3 - Agregar veterinaria a la red");
        console.log("4 - Modificar verterinaria");
        console.log("5 - Eliminar verterinaria");
        console.log("");
        console.log("0 - Salir del sistema");
        const opcionMenu = readlineSync.questionInt("Ingrese opcion: ");
        const opcionNumerica = Number(opcionMenu);
        console.log(opcionNumerica);
        if (!(opcionNumerica >= 1 && opcionNumerica <= 6)) {
            console.log("Error opcion incorrecta");
            readlineSync.question("Enter para continuar");
            return true;
        }
        switch (opcionNumerica) {
            case 1:
                console.clear();
                this.red.listarVeterinarias();
                return true;
            case 3:
                const veterinaria = new MenuCrearVeterinaria(this.red).questionVeterinaria();
                if (veterinaria) {
                    this.red.agregarVeterinaria(veterinaria);
                    this.red.guardar();
                    TextUtils.consoleLinea();
                    TextUtils.mensajeConEnter('Veterinaria Guardada exitosamente');
                    return true;
                }
                return true;
            case 2:
                const veterinariaSeleccionada = new MenuSeleccionarVeterinaria(this.red).questionVeterinaria();
                if (veterinariaSeleccionada) {
                    console.clear();
                    TextUtils.consoleLinea();
                    console.log(`Veterinaria ${veterinariaSeleccionada.getnombre()} seleccionada exitosamente`);
                    TextUtils.consoleLinea();
                    TextUtils.esperarTecla();
                    let sigueMenuVet = true;
                    while (sigueMenuVet) {
                        sigueMenuVet = new MenuVeterinaria(veterinariaSeleccionada, this.red).desplegarMenu();
                    }
                }
                return true;
            case 4:
                this.red.listarVeterinarias();
                return true;
            case 5:
                this.red.listarVeterinarias();
                return true;
            case 0:
                return false;
            default:
                return true;
        }

    }
}