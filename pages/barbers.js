import Layout from "../components/Layout";
import SubPagesHero from "../components/SubPagesHero";
import Barbers from "../components/Barbers";

export default function Service() {
  return (
    <Layout>
      <SubPagesHero pageName="Our Barbers" />
      <Barbers />
    </Layout>
  );
}
