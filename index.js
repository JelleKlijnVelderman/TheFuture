const express = require('express');

// Maak een Express-applicatie aan
const app = express();

// Configureer de app om JSON-gegevens te verwerken
app.use(express.json());

// Definieer een basisroute
app.get('/', (req, res) => {
  res.send('Jo gast!');
});

// Start de server en luister naar een bepaalde poort
const port = 3000;
app.listen(port, () => {
  console.log(`De server is gestart en luistert op poort ${port}`);
});



