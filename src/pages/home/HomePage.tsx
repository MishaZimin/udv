import Layout from "src/components/layout/Layout";
import { Benefits } from "src/components/benefits/Benefits";
import Survey from "src/components/survey/Survey";

export function HomePage() {
  return (
    <Layout>
      <Survey />
      <Benefits />
    </Layout>
  );
}
