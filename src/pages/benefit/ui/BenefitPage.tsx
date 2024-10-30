import { BackButton } from "src/shared/ui/button/BackButton";
import Markdown from "react-markdown";
import { Feedback } from "src/features/feedback/ui/Feedback";
import { useLocation } from "react-router-dom";
import { useBenefit } from "../model/hooks/useBenefit";
import Loader from "src/shared/ui/loader/Loader";

export const BenefitPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const benefitId = params.get("benefitId");

  const { benefitData, error, isLoading } = useBenefit(Number(benefitId));

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>error</p>;
  }
  console.log("benefitData:", benefitData.name, "|", benefitData.text);

  // const mardownText = ``;

  return (
    <>
      <div className="mx-auto h-svh w-[728px]">
        <div className="flex flex-col">
          <div className="fixed flex w-svw flex-row items-center gap-[8px] bg-white px-2 py-[32px] sm:w-[728px] sm:px-10">
            <BackButton link="back" />
            <p className="text-[32px] font-semibold leading-[40px]">
              {benefitData.name}
            </p>
            <Feedback />
          </div>
          <div className="prose mb-[32px] w-full px-2 pt-[144px] sm:px-10 sm:pt-[104px] md:ml-16 md:w-[600px]">
            <Markdown>{benefitData.text}</Markdown>
          </div>
        </div>
      </div>
      <Feedback />
    </>
  );
};
