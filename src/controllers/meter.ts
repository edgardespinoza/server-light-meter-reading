import { Request, Response } from "express";
import { ZodError, z } from "zod";
import { Meter } from "../model/meter";
import * as service from "../services/meter";
export const meterSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(1, "Not empty"),
  measure: z
    .number({ required_error: "measure is required" })
    .gte(1, "measure must be 1"),
});

export const dateSchema = z.coerce.date({
  required_error: "Date must be ",
  invalid_type_error: "That's not a date!"
})

export async function createMeter(req: Request, res: Response) {
  try {
    await meterSchema.parseAsync(req.body);
    let meter = new Meter(req.body.name, req.body.measure, new Date());

    await service.createMeter(meter);

    res.status(201)

  } catch (error) {
    if (error instanceof ZodError)
      res
        .status(400)
        .json({ error: "Invalid request body", details: error.errors });
    res.status(500).json(JSON.stringify(error));
  }
}

export async function getMetersByDate(req: Request, res: Response) {
  try {
    (await dateSchema.safeParseAsync(req.params.date)).success

     let result =  await service.getMeterByDate(new Date(req.params.date))
    
     res.status(200)
     .json(result)

  } catch (error) {
    if (error instanceof ZodError)
      res
        .status(400)
        .json({ error: "Invalid request body", details: error.errors });
    res.status(500).json(JSON.stringify(error));
  }
}
