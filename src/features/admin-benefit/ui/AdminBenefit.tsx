import { Benefit } from "src/entities/benefit";
import { AdminAction } from "src/features/admin-actions/ui/AdminAction";

type Props = {
  title: string;
  subtext: string;
  image?: string;
  isNewTag: boolean;
  link: string;
};

export const AdminBenefit = ({
  title,
  subtext,
  link,
  isNewTag,
  image,
}: Props) => {
  return (
    <div className="relative">
      <Benefit
        title={title}
        subtext={subtext}
        isNewTag={isNewTag}
        link={link}
        image={image}
      />
      <AdminAction
        title={title}
        subtext={subtext}
        isNewTag={isNewTag}
        link={link}
        image={image}
      />
    </div>
  );
};
