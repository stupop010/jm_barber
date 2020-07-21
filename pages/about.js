import Layout from "../components/Layout";
import SubPagesHero from "../components/SubPagesHero";
import About from "../components/About";

export default function AboutPage() {
  return (
    <Layout>
      <SubPagesHero pageName="About Us" />
      <About />
    </Layout>
  );
}
