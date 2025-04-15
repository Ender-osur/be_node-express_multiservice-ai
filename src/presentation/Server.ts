import express, { Application, Router } from "express";
import chalk from "chalk";
import cors from "cors";

interface Options {
  port: number;
  routes: Router;
}

class Server {
  public readonly app: Application;
  private readonly port: number;
  private readonly routes: Router;

  constructor({ port = 3100, routes }: Options) {
    this.app = express();
    this.port = port;
    this.routes = routes;

    this.setupMiddlewares();
    this.setupRoutes();
  }

  private setupMiddlewares() {
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  private setupRoutes() {
    this.app.use(this.routes);
  }

  private initialMessage() {
    console.log("Backend is running 🚀 in this PORT: ", this.port);
    console.log("ᕦ( ᴼ ڡ ᴼ )ᕤ");
    console.log(
      chalk.green.bold("🠆 "),
      "Local: ",
      chalk.cyan.underline(
        `http://localhost:${chalk.cyan.bold(`${this.port}`)}`
      )
    );
  }

  public async start() {
    this.app.listen(this.port, () => {
      this.initialMessage();
    });
  }
}

export default Server;
