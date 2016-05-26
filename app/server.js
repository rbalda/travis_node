/**
 * Created by rbalda on 26/05/16.
 */
var express = require('express');
var bodyParser=require("body-parser");
var app = express();
var calculadorCalificaciones = require("./calificaciones");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get("/promedios/",function (req,res) {
    res.sendFile("index.html",{root:'/home/rbalda/WebstormProjects/travis_node/views/'});
});

app.post("/promedios/",function (req,res) {
    console.log(req.body);
    var result = calculadorCalificaciones.calculoPromedios(parseFloat(req.body.c1),
        parseFloat(req.body.c2),parseFloat(req.body.c3));
    res.send(result.toString());
});

app.listen(3000);