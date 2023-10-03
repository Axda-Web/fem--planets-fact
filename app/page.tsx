import Image from "next/image";
import { getPlanets } from "@/lib/actions/planet";

export default async function Home() {
  const planets = await getPlanets();
  return <main className="">Homepage</main>;
}
