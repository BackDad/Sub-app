// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8081;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  res.status(200).send('Form data received successfully');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
