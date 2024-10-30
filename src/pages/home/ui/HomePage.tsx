import { Layout } from "src/app/layout/ui/Layout";
import { Feedback } from "src/features/feedback/ui/Feedback";
import { getFromLocalStorage } from "src/shared/lib/local-storage";
import { Benefits } from "src/widgets/benefits/ui/Benefits";
import { SurveyBanner } from "src/widgets/survey/ui/SurveyBanner";

export const HomePage = () => {
  console.log(getFromLocalStorage("token"));
  return (
    <Layout>
      <SurveyBanner />
      <Benefits />
      <Feedback />
    </Layout>
  );
};
