import Layout from "../components/Layout";
import SubPagesHero from "../components/SubPagesHero";
import Services from "../components/Services";

export default function Service() {
  return (
    <Layout>
      <SubPagesHero pageName="our services" />
      <Services />
    </Layout>
  );
}
