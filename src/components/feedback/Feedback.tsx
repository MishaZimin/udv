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
              className="text-bottom animation flex flex-row items-center gap-[8px] rounded-full bg-darkblue px-[16px] pb-[14px] pt-[12px] hover:bg-opacity-[90%]"
            >
              <p className="text-[20px] font-semibold leading-[28px] text-yellow">
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
