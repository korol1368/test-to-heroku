const express = require('express');
const http = require('http');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, 'dist/test-to-heroku')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/test-to-heroku/index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);

const app = http.createServer(app);
app.listen(port, () => console.log('running'));
