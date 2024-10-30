import { Benefit } from "src/entities/benefit";
import { AdminAction } from "src/features/admin-actions/ui/AdminAction";
import { IBenefitCard } from "src/widgets/benefits";

type Props = {
  benefit: IBenefitCard;
  isNewTag: boolean;
  link: string;
};

export const AdminBenefit = ({ link, isNewTag, benefit }: Props) => {
  return (
    <div className="relative">
      <Benefit benefit={benefit} isNewTag={isNewTag} link={link} />
      <AdminAction isNewTag={isNewTag} link={link} benefit={benefit} />
    </div>
  );
};
