import { Layout } from "src/app/layout/ui/Layout";
import { Benefits } from "src/widgets/benefits/ui/Benefits";
import { SurveyBanner } from "src/widgets/survey/ui/SurveyBanner";

export const HomePage = () => {
  return (
    <Layout>
      <SurveyBanner />
      <Benefits />
    </Layout>
  );
};
