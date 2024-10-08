import BackButtonIcon from "src/shared/image/BackButton.svg";
import { useGoBack } from "src/shared/hooks/useGoBack";

export function BackButton() {
    return (
        <button
            onClick={useGoBack()}
            className=" px-[16px] py-[8px] my-auto bg-graphite bg-opacity-0  rounded-[16px] hover:bg-opacity-[4%] active:bg-opacity-[8%]">
            <img className="mx-auto w-[24px]" src={BackButtonIcon} />
        </button>
    );
}
