import { Layout } from "src/shared/ui/layout/ui/Layout";
import { Feedback } from "src/features/feedback/ui/Feedback";
import { getFromLocalStorage } from "src/shared/lib";
import { BenefitsList } from "src/widgets/benefits-list/ui/BenefitsList";
import { SurveyBanner } from "src/widgets/survey/ui/SurveyBanner";

export const HomePage = () => {
  console.log(getFromLocalStorage("token"));
  return (
    <Layout>
      <SurveyBanner />
      <BenefitsList />
      <Feedback />
    </Layout>
  );
};
