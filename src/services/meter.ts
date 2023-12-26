import { Meter } from "../model/meter";
import { db } from "../utils/db";

export async function createMeter(meter: Meter) {
  return await db.meter.create({
    data: {
      name: meter.name,
      measure: meter.measure,
    },
  });
}

export async function getMeterByDate(createAt: Date): Promise<Meter[]> {
  return await db.meter.findMany({
    where:{
      createAt: {
        gte: new Date(createAt.getFullYear(), createAt.getMonth(), 1),
        lte: new Date(createAt.getFullYear(), createAt.getMonth()+1, 0)
      }
    }
  });
}
