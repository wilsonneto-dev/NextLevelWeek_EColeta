import { Application } from "oak";
import config from "./config.ts";
import router from "./routes.ts";

class Server {
  private app: Application;

  constructor() {
    this.app = new Application();
  }

  private middlewares() {
    this.app.use(router.routes());
  }

  private listen() {
    console.log(`Listening on: http://${config.appHost}:${config.appPort}`);
    return this.app.listen(`${config.appHost}:${config.appPort}`);
  }

  public startUp(): any {
    this.middlewares();
    return this.listen();
  }
}

const server = new Server();
await server.startUp();
