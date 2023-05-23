const express = require('express');
const router = express.Router();

// Definieer een route die een JSON-reactie retourneert
app.get('/data', (req, res) => {
    res.send('Jo gast!');
  });

  // Verzend de response naar de client
  res.json(data);

module.exports = router;