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
        //string to array percent
        result_array = [];
        array_percent = result.split("_")
        for (i in array_percent) {
            result_array.push(parseFloat(array_percent[i]))
        }

        console.log("Render back to index, with result " + result)
        console.log(JSON.stringify(result_array))
        res.render('index.pug', {
            list_percent: result_array,
            old_url: url
        })
    })
});

app.listen(port, function() {
    console.log("Server is running on port " + port)
});