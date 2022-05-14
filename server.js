const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname + '/public/')))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.use(express.static(path.join(__dirname + '/public/')))
app.get('/weekly', (req, res) => {
    res.sendFile(`${__dirname}/public/weekly.html`)
});

app.use(express.static(path.join(__dirname + '/public/')))
app.get('/monthly', (req, res) => {
    res.sendFile(`${__dirname}/public/monthly.html`)
});

app.listen(3000, () => {
    console.log('Application listening on port 3000');
});