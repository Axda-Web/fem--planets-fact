import { PrismaClient } from "@prisma/client";
import { PlanetSchema, PlanetsSchema } from "@/zod.schemas";
const prisma = new PrismaClient();

const getPlanets = async () => {
  try {
    const rawData = await prisma.planet.findMany({
      select: {
        id: true,
        name: true,
        overview: {
          select: {
            id: true,
            content: true,
            source: true,
          },
        },
        structure: {
          select: {
            id: true,
            content: true,
            source: true,
          },
        },
        geology: {
          select: {
            id: true,
            content: true,
            source: true,
          },
        },
        rotation: true,
        revolution: true,
        radius: true,
        temperature: true,
        images: {
          select: {
            id: true,
            planet: true,
            internal: true,
            geology: true,
          },
        },
      },
    });
    const parsedData = PlanetsSchema.parse(rawData);
    return parsedData;
  } catch (error) {
    console.log(error);
  }
};

const getPlanetByName = async (name: string) => {
  try {
    const rawData = await prisma.planet.findUnique({
      where: {
        name: name,
      },
      select: {
        id: true,
        name: true,
        overview: {
          select: {
            id: true,
            content: true,
            source: true,
          },
        },
        structure: {
          select: {
            id: true,
            content: true,
            source: true,
          },
        },
        geology: {
          select: {
            id: true,
            content: true,
            source: true,
          },
        },
        rotation: true,
        revolution: true,
        radius: true,
        temperature: true,
        images: {
          select: {
            id: true,
            planet: true,
            internal: true,
            geology: true,
          },
        },
      },
    });
    const parsedData = PlanetSchema.parse(rawData);
    return parsedData;
  } catch (error) {
    console.log(error);
  }
};

export { getPlanets, getPlanetByName };
