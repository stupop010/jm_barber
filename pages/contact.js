import Layout from "../components/Layout";
import SubPagesHero from "../components/SubPagesHero";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <Layout>
      <SubPagesHero pageName="Contact Us" />
      <Contact />
    </Layout>
  );
}
