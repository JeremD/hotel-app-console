/*>> Liste des clients
NOM_1 PRENOMS_1
NOM_2 PRENOMS_2*/

var request = require('request');

/**
 * Récupérer la liste des clients (GET)
 */
function listeClient() {
    request('https://jeremy-hotel-web-api.herokuapp.com/clients?start=0&size=5', {
        json: true
    }, (err, res, body) => {

        // Erreur si code HTTP 4XX-5XX
        if (err) {
            return console.log('Erreur', err);
        }

        // Clients récupérés
        console.log(body);
    });
}

exports.client = listeClient;