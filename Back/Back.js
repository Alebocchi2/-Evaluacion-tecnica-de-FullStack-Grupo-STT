const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const settings = require('./settings');
const mysql = require('mysql');
const path = require('path');
const db = mysql.createConnection(settings.db);

db.connect((err) => {
    if(err) throw err;
    console.log("db: PREPARADO");

    db.query(
        `CREATE TABLE IF NOT EXISTS comentarios
        (
            id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
            fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            comentario VARCHAR(300) NOT NULL,
            PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8`
            
    );

    //res.sendOk({greeting: 'Welcome to Hydra Express!'});

    app.get('/getComentarios', function(req, res) {
            db.query(
                "SELECT comentario FROM alexisbocchi.comentarios", (err, rows) => {
                    if(err) {                    
                        return res.status(500).end();
                    }
                    let respuesta = [];
                    for (let index = 0; index < rows.length; index++) {
                        respuesta.push(rows[index].comentario);
                    }
                    console.log("Respuesta: " + respuesta);
                    console.log("Error: " + err);
                    return res.send({status: "ok", comentarios: respuesta});
                }
            );
    });

    app.post('/cargarComentario', bodyparser.raw({
        limit: "10mb",
        type: "text/xml"
    }),
    (req, res) => {
        db.query(
            "INSERT INTO comentarios SET ?", {
                comentario: req.params.comentario,
            }, (err) => {
                if(err) {
                    return res.status(500).end();
                }
                return res.send({status: "ok", resultado: "Comentario ingresado con exito"});
            });
    });

    app.listen(3000, () => {
        console.log("app: PREPARADO");
    });

});