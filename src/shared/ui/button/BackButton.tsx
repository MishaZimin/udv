import BackButtonIcon from "src/shared/image/BackButton.svg";
import { Link } from "react-router-dom";

interface Props {
  link: string;
}

export function BackButton(props: Props) {
  return (
    <Link
      to={props.link}
      className="my-auto rounded-[8px] bg-graphite bg-opacity-0 px-[16px] py-[8px] hover:bg-opacity-[4%] active:bg-opacity-[8%]"
    >
      <img className="mx-auto w-[24px]" src={BackButtonIcon} />
    </Link>
  );
}
