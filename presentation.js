// Attendre la saisie de l'utilisateur
// Remplace readline pour lire les données en entrées de manière asynchrone
var userInput = require('wait-for-user-input');

/**
 * Afficher le menu principal
 */
async function start() {

    // Appel de la saisie 
    await input();

}
/**
 * Saisir le choix dans le menu
 */
async function input() {

    do {
        var saisie = await userInput("1. Lister les clients\n99. Sortir\n");

        switch (saisie) {
            case "1":
                console.log(">> Liste des clients");
                break;
            case "99":
                console.log("Aurevoir");
                break;
            default:
                console.log("Veuillez choisir un menu correct !")
        }
    } while (saisie != "99");
}

// Export de presentation
exports.presentation = start;