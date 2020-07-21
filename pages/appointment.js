import Layout from "../components/Layout";
import SubPagesHero from "../components/SubPagesHero";
import Appointment from "../components/Appointment";

export default function Appointments() {
  return (
    <Layout>
      <SubPagesHero pageName="Appointment" />
      <Appointment />
    </Layout>
  );
}
