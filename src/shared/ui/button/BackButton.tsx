import BackButtonIcon from "src/shared/assets/svgs/BackButton.svg";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  link: string | "back";
};

export function BackButton(props: Props) {
  const navigate = useNavigate();

  return (
    <>
      {props.link == "back" ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="my-auto rounded-[8px] bg-graphite bg-opacity-0 px-[16px] py-[8px] hover:bg-opacity-[4%] active:bg-opacity-[8%]"
        >
          <img className="mx-auto w-[24px]" src={BackButtonIcon} />
        </button>
      ) : (
        <Link
          to={props.link}
          className="my-auto rounded-[8px] bg-graphite bg-opacity-0 px-[16px] py-[8px] hover:bg-opacity-[4%] active:bg-opacity-[8%]"
        >
          <img className="mx-auto w-[24px]" src={BackButtonIcon} />
        </Link>
      )}
    </>
  );
}
