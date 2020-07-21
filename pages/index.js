import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import About from "../components/About";
import Barbers from "../components/Barbers";

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <About />
      <Barbers />
    </Layout>
  );
}
