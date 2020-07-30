var request = require('request');

/**
 * Récupérer la liste des clients (GET)
 */
function listerClients(getClient) {
    request('https://jeremy-hotel-web-api.herokuapp.com/clients?start=0&size=5', {
        json: true
    }, (err, res, body) => {

        // Erreur si code HTTP 4XX-5XX
        if (err) {
            return console.log('Erreur', err);
        }

        // Clients récupérés
        getClient(body);
    });
}

// Export du service listeClient
exports.listerClients = listerClients;