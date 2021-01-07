const express = require('express');
const {join} = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(join(__dirname, '.dist')));

app.get('/*', (_, res) => {
  res.sendFile(join(__dirname, '.dist/index.html'));
});

app.listen(port);
