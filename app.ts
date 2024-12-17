import { MenuPricipal } from "./src/Sistema/MenuPrincipal";
import { RedVeterinarias } from "./src/veterinaria/Veterinarias";

const red = new RedVeterinarias();
const menu = new MenuPricipal(red);
let siguePrograma = true;
while (siguePrograma) {
    siguePrograma = menu.desplegarMenu();
}
console.log("Fin del programa.")

