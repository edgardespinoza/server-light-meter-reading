import express, { Request, Response } from "express";

import compress from "compression";
import cors from "cors";
import errorHandler from "errorhandler";
import helmet from "helmet";
import httpStatus from "http-status";
import router from "./router";
// Create Express server
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

// Express configuration
app.set("port", process.env.PORT ?? 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
app.use(compress());
router.use(errorHandler());
app.use(router);

router.use((err: Error, req: Request, res: Response, _next: () => void) => {
  console.log(err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
});

export default app;
