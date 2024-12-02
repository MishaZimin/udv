/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextLoader } from "src/shared/ui/loader/TextLoader";

export const Header = ({
  isLoading,
  benefitData,
}: {
  isLoading: boolean;
  benefitData: any;
}) => {
  return isLoading ? (
    <TextLoader height="36px" backgroundColor="bg-white" />
  ) : (
    <>{benefitData.name}</>
  );
};
