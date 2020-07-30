// Module qui remplace readline pour lire les données en entrées de manière asynchrone
var userInput = require('wait-for-user-input'); // Attendre la saisie de l'utilisateur
var service = require('./service');

/**
 * Afficher le menu principal
 */
async function start() {

    console.log('** Administration Hotel **');

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

                // Appel du service listerClient (asynchrone)
                service.listerClients(tableauClients => {
                    // Retourner un tableau de client
                    var getClient = tableauClients.map(client => " " + client.nom + " " + client.prenoms).join("\n");
                    console.log(getClient);
                });
                break;
            case "99":
                console.log("Au revoir");
                break;
            default:
                console.log("Veuillez choisir un menu correct !")
        }
    } while (saisie != "99");
}

// Export de presentation
exports.presentation = start;