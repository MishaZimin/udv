import Feedbackline from "src/shared/image/feedback-line.svg";

export function Feedback() {
    return (
        <div className="flex">
            <a
                href="https://tally.so/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-[8px] py-[12px] px-[16px] rounded-full bg-darkblue hover:bg-opacity-[90%] text-bottom transition duration-300 transform">
                <p className="text-yellow font-semibold text-[20px] leading-[28px]">
                    Фидбек
                </p>
                <img className="w-[28px] h-[28px]" src={Feedbackline} />
            </a>
        </div>
    );
}
