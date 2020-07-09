const functions = require('firebase-functions');
const { dialogflow, Suggestions } = require('actions-on-google');

const app = dialogflow({
    debug: false
});

app.intent("Default Welcome Intent", conv => {
    conv.ask(`Welcome Message from Webhook`);
});

app.intent("Default Fallback Intent", conv => {
    conv.ask(`I didn 't understand!`);
    conv.ask(`I'm sorry, can you say that again?`);
});

exports.fulfillment = functions.https.onRequest(app); 