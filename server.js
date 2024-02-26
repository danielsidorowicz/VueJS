const fs = require("fs")
const express = require("express");
const { log } = require("console");
const app = express()
const PORT = 3000;

app.use(express.static('static'))
app.use(express.static('static/cwiczenia/lekcja1'))


app.get("/", function (req, res) {
    res.sendFile("index.html")
})

app.get("/cwiczenia", function (req, res) {
    let dirnames = fs.readdirSync(__dirname + "/static/cwiczenia");

    let context = {}
    context.dirnames = dirnames

    for (let i = 0; i < dirnames.length; i++) {
        let filenames = fs.readdirSync(__dirname + `/static/cwiczenia/${dirnames[i]}`);

        let dir = dirnames[i]

        context[dir] = filenames

    }
    console.log(context);
    res.send(context)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})