import { PrismaClient } from "@prisma/client";
// import { PlanetSchema, PlanetsSchema } from "@/zod.schemas";
const prisma = new PrismaClient();

const getPlanets = async () => {
  try {
    const rawData = await prisma.planet.findMany();
    // const parsedData = PlanetsSchema.parse(rawData);
    return rawData;
  } catch (error) {
    console.log(error);
  }
};

const getPlanetById = async (id: string) => {
  try {
    const rawData = await prisma.planet.findUnique({
      where: {
        id: id,
      },
    });
    // const parsedData = PlanetSchema.parse(rawData);
    return rawData;
  } catch (error) {
    console.log(error);
  }
};

export { getPlanets };
