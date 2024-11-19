import { Layout } from "src/shared/ui/layout/ui/Layout";
import { Apeals } from "src/widgets/apeals";
import { ServiceSatisfaction } from "src/widgets/service-satisfaction/ui/ServiceSatisfaction";
import { UseBenefit } from "src/widgets/use-benefit/ui/UseBenefit";

export const AdminApealsPage = (): JSX.Element => {
  return (
    <Layout>
      <div className="mb-8 flex flex-col gap-10">
        <Apeals />
        <ServiceSatisfaction />
        <UseBenefit />
      </div>
    </Layout>
  );
};
