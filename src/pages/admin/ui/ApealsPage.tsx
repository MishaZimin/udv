import { Layout } from "src/shared/ui/layout/ui/Layout";
import { Apeals } from "src/widgets/apeals";
import { UseBenefit } from "src/widgets/use-benefit/ui/UseBenefit";

export const AdminApealsPage = (): JSX.Element => {
  return (
    <Layout>
      <div className="mb-8 flex flex-col gap-10">
        <Apeals />
        <UseBenefit />
      </div>
    </Layout>
  );
};
