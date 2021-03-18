var express = require("express")
var bodyParser = require('body-parser')
var engine = require('./engine.js')

var app = express()
var port = 3003

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
    res.render('index.pug')
});

app.post('/', function(req, res) {
    var url = req.body.url.trim();
    console.log("url: " + url)
    engine.engine(url, function(result) {
        console.log("Render back to index, with result " + result)
        res.render('index.pug', {
            list_percent: result,
            old_url: url
        })
    })
});

app.listen(port, function() {
    console.log("Server is running on port " + port)
});