import Profile from "src/shared/assets/svgs/Profile.svg";
import Admin from "src/shared/assets/svgs/Admin.svg";

type Props = {
  isAdministration: boolean;
};

export const EmployeeIcon = ({ isAdministration }: Props) => {
  return (
    <div className="min-w-[22px]rounded-full my-auto mt-0 min-h-[22px] bg-opacity-[8%] bg-none">
      <img className="min-w-[22px]" src={isAdministration ? Admin : Profile} />
    </div>
  );
};
