export interface Identificable {
    getId():number;
}

export class IdUtils {

    static getProximoID(objetos: Identificable[]) {
        let maximo = 1;
        for (let index = 0; index < objetos.length; index++) {
            const conid = objetos[index];
            if (conid.getId() > maximo) {
                maximo = conid.getId();
            }
        }
        return maximo + 1;
    }
}