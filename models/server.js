const express = require('express');
var cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        this.app.use(cors());

        //Lectura y parseo del Body
        this.app.use( express.json() );

        //Drectorio publico
        this.app.use(express.static('public'));
    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Servidro corriendo en el puerto', this.port);
        });
    }

}

module.exports = Server;