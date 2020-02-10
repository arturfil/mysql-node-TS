import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import Games from './routes/games';

dotenv.config();

class Server {
  public app: Application;
  public port:any = process.env.PORT;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }
  
  config(): void {
    this.app.use(morgan("dev"))
    this.app.use(cors());
    this.app.use(express.json());  
  }
  
  routes(): void {
    this.app.use('/api/games', Games);
  }
  
  start(): void {
    this.app.listen(this.port, () => {
        console.log(`Server on port ${this.port}`)
      })
  } 
}
 
const server = new Server();
server.start(); 

