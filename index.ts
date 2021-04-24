
import Server from './classes/server';


const server = new Server();



server.start( () =>{
    console.log(`Servidor en el puerto numero ${server.port}`);
});