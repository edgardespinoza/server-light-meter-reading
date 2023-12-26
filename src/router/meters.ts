import {Express} from "express";
import { createMeter, getMetersByDate } from "../controllers/meter";
import { isAuthenticated } from "../middlewares/index";

export const register = (app: Express) => {

app.get("/api/meter/:date", isAuthenticated, getMetersByDate);

app.post("/api/meter", isAuthenticated, createMeter);

}