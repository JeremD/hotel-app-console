// Attendre la saisie de l'utilisateur
// Remplace readline pour lire les données en entrées de manière asynchrone
var userInput = require('wait-for-user-input');
var listerClients = require('./service');

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

    // Boucle sur la saisie
    do {
        console.log("1. Lister les clients\n99. Sortir\n");
        var saisie = await userInput("Votre choix : ");

        switch (saisie) {
            case "1":
                console.log(">> Liste des clients");
                listerClients.client();
                break;
            case "99":
                console.log("Aurevoir");
                process.exit(1);
            default:
                console.log("Veuillez choisir un menu correct !")
        }
    } while (saisie != "99");
}

// Export de presentation
exports.presentation = start;