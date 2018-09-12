// Här skulle ni behöva en server som körde och som kan hantera 
// Requests från appen
// Detta för att sköta betalningar mot klarna och lägga till firebase-funktioner
// Detta är en simpel konfiguration för att
// Skriv `npm start` i terminalen när ni står i server-mappen

// Här kan ni läsa en liten tutorial om Node.js och express: https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1
// Ni behöver skapa ett API som appen kan kommunicera med, dvs. kalla på
// Här kan ni läsa hur man kopplar ihop appen med servern: https://codeburst.io/integrating-react-native-apps-with-back-end-code-using-fetch-api-8aeb83dfb428

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/klarna/payment', (req, res) => {
    // TODO handle klarna payment here
    // Läs om klarnas API här: https://developers.klarna.com/en/gb/kco-v3
    
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// Om ni går in på webbläsaren och skriver in localhost:3000 så borde ni se en sida