import { PlanetSchema, PlanetsSchema } from "./zod.schemas";
import { z } from "zod";

export type Planet = z.infer<typeof PlanetSchema>;
export type Planets = z.infer<typeof PlanetsSchema>;
