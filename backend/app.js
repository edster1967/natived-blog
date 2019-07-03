var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var homeRoute = require('./routes/homeRouter');
const path = require('path');

var port = process.env.PORT || 3000;

app.use
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", express.static(path.join(__dirname, "angular")));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "angular", "index.html"));
});

app.listen(port);