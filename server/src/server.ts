import express, { Request, Response, Express } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

class Server {
  private app: Express;

  constructor() {
    this.app = express();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(routes);
    this.app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
  }

  private listen() {
    const port = 3333;
    this.app.listen(port, () => {
      console.log(`Listening on port: ${port}`);
    });
  }

  public startUp(): void {
    this.middlewares();
    this.listen();
  }
}

const server = new Server();
server.startUp();
