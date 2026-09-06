import { fetchPujaData } from "@/sanity/fetchData";
import LandingPageShell from "@/components/LandingPageShell";

export const revalidate = 60; // Revalidate every minute for live CMS updates

export default async function Home() {
  const data = await fetchPujaData();

  return <LandingPageShell data={data} />;
}
