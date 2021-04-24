import express from 'express';
import cors from 'cors';
//Variables globales
import { SERVER_PORT } from '../global/enviroment'; 
import router from '../routes/router';

export default class Server {
    public app: express.Application;
    public port: number;

    constructor(){
        //Inicializando
        this.app = express();
        this.port = SERVER_PORT;
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use( express.urlencoded({ extended: true })); // reconocer la solicitud como cadena o matrices, con extended: true, usa libreria qs
        this.app.use(express.json()); //reconocer la solicitud como un objeto json
        this.app.use(cors()); //permitir origenes cruzados


    }

    routes(){
        this.app.use('/', router);
    }
    start ( callback: Function){
        this.app.listen(this.port, callback());
    }
}
