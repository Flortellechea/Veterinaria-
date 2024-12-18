import * as readlineSync from 'readline-sync';
import { Veterinaria } from '../veterinaria/Veterinaria';
export class TextUtils {


    static consoleLinea(): void {
        console.warn(`-----------------------------------------------------`);
    }

    static esperarTecla(): void {
        readlineSync.question("Presione enter para continuar...");
    }

    static mensajeConEnter(texto: string): void {
        readlineSync.question(texto);
    }

    static bannerVeterinaria(vet: Veterinaria) {
        TextUtils.consoleLinea();
        console.warn(`  VETERINARIA ${vet.getnombre().toUpperCase()}`)
        TextUtils.consoleLinea();
    }

    static pedirNumeroObligatorio(texto: string): number {
        let numeroValido = false;
        while (!numeroValido) {
            const numero = readlineSync.questionInt(texto);
            const opcionNumerica = Number(numero);
            if (!(opcionNumerica >= 0)) {
                console.log("Error numero invalido");
                readlineSync.question("Enter para continuar");
            } else {
                return opcionNumerica;
            }
        }
    }

    static pedirTextoObligatorio(texto: string): string {
        let textoValido = false;
        while (!textoValido) {
            const textoLeido: string = readlineSync.question(texto);
            if ((textoLeido.trim().length == 0)) {
                console.log("Error debe ingresar texto valido");
                readlineSync.question("Enter para continuar");
            } else {
                return textoLeido;
            }
        }
    }

    static pedirTextoOpcionalVelorXDefecto(campo: string, valorDefecto: string): string {
        const textoLeido: string = readlineSync.question(`Si quiere modificar ${campo} ingrese nuevo valor, si desea conservar (${valorDefecto}) presione enter: `);
        if ((textoLeido.trim().length == 0)) {
            return valorDefecto;
        } else {
            return textoLeido;
        }
    }
}