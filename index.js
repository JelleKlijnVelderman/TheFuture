const express = require('express');

// Maak een Express-applicatie aan
const app = express();

// Configureer de app om JSON-gegevens te verwerken
app.use(express.json());

// Definieer een basisroute
app.get('/', (req, res) => {
  res.send('Jo gast!');
});

app.get('/melbourne-2023', (req, res) => {
    res.send('De uitslag in melbourne 2023 is: 1. Max Verstappen 2. Lewis Hamilton 3. Charles Leclerc');
  });

// Start de server en luister naar een bepaalde poort
const port = 3000;
app.listen(port, () => {
  console.log(`De server is gestart en luistert op poort ${port}`);
});



