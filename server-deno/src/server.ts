import { Application } from "oak";
import config from "./config.ts";
import router from "./routes.ts";
import LoggerMiddleware from "./middlewares/LoggerMiddleware.ts";

class Server {
  private app: Application;
  private _loggerMiddleware = new LoggerMiddleware();

  constructor() {
    this.app = new Application();
  }

  private events() {
    this.app.addEventListener("error", (evt: any) => {
      console.log(evt.error);
    });
  }

  private middlewares() {
    this.app.use(this._loggerMiddleware.log.bind(this._loggerMiddleware));
    this.app.use(router.routes());
  }

  private listen() {
    console.log(`Listening on: http://${config.appHost}:${config.appPort}`);
    return this.app.listen(`${config.appHost}:${config.appPort}`);
  }

  public startUp(): any {
    this.middlewares();
    this.events();
    return this.listen();
  }
}

const server = new Server();
await server.startUp();
