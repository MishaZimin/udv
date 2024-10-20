import Feedbackline from "src/shared/assets/svgs/feedback-line.svg";

export function Feedback() {
  return (
    <div className="fixed bottom-[84px] left-0 right-0">
      <div className="relative mx-auto max-w-[1024px]">
        <div className="absolute right-0">
          <div className="flex">
            <a
              href="https://tally.so/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bottom animation hover:bg-darkbluehover active:bg-darkblueactive bg-darkblue flex flex-row items-center gap-[8px] rounded-full px-[16px] pb-[14px] pt-[12px]"
            >
              <p className="text-yellow text-[20px] font-semibold leading-[28px]">
                Фидбек
              </p>
              <img className="h-[28px] w-[28px]" src={Feedbackline} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
