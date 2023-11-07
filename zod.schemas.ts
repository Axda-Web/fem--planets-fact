import { z } from "zod";

export const PlanetOverviewSchema = z.object({
  id: z.string(),
  content: z.string(),
  source: z.string(),
});
export const PlanetStructureSchema = z.object({
  id: z.string(),
  content: z.string(),
  source: z.string(),
});
export const PlanetGeologySchema = z.object({
  id: z.string(),
  content: z.string(),
  source: z.string(),
});

export const ImagesSchema = z.object({
  id: z.string(),
  planet: z.string(),
  internal: z.string(),
  geology: z.string(),
});

export const PlanetSchema = z.object({
  id: z.string(),
  name: z.string(),
  overview: PlanetOverviewSchema,
  structure: PlanetStructureSchema,
  geology: PlanetGeologySchema,
  rotation: z.string(),
  revolution: z.string(),
  radius: z.string(),
  temperature: z.string(),
  images: ImagesSchema,
});

export const PlanetsSchema = z.array(PlanetSchema);
