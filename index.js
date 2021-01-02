const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  request(
    { url: 'https://lettera.api.ksfmedia.fi/v3/article/a6282b95-e620-4040-87d1-731fed85a7d6' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      res.json(JSON.parse(body));
    }
  )
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
