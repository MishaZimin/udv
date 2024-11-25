import { useEffect, useRef } from "react";
import Dots from "src/shared/assets/svgs/Dots.svg";
import { ApplicationText } from "./ApplicationText";

type Props = {
  application: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  isActive: boolean;
  onToggle: (id: string | null) => void;
};

export const ApplicationItem = ({ application, isActive, onToggle }: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      onToggle(null);
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, isActive]);

  const handleClick = () => {
    onToggle(!isActive ? application.user_uuid : null);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative flex w-full flex-row gap-8 px-2 py-4 text-left">
      <ApplicationText application={application} />

      <button className="z-0 min-w-[22px]" onClick={handleClick}>
        <img src={Dots} />
      </button>

      {isActive && (
        <div className="absolute right-0 top-[40px] flex justify-end">
          <div className="z-10 flex w-fit flex-col gap-2 rounded-[16px] bg-card p-2">
            <button
              className="h-[40px] px-4 pb-[10px] pt-2 text-left"
              onClick={() => {
                console.log("Принять", application.user_uuid);
              }}>
              <p>Принять</p>
            </button>
            <button
              className="h-[40px] px-4 pb-[10px] pt-2 text-left"
              onClick={() => {
                console.log("Отклонить", application.user_uuid);
              }}>
              <p>Отклонить</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
