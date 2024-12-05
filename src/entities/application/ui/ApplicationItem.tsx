/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import Dots from "src/shared/assets/svgs/Dots.svg";
import { ApplicationText } from "./ApplicationText";
import { TApplicationItem } from "../../../pages/applications/model/applicationItem.type";
import { useDenyRequest } from "../api/mutations/use-deny-request";
import { useApplyRequest } from "../api/mutations/use-apply-request";

type Props = {
  application: TApplicationItem;
  isActive: boolean;
  onToggle: (id: string | null) => void;
};

export const ApplicationItem = ({ application, isActive, onToggle }: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const applyRequestMutation = useApplyRequest();
  const denyRequestMutation = useDenyRequest();

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
  }, [isActive]);

  const handleClick = () => {
    onToggle(!isActive ? String(application.request_id) : null);
  };

  const handleApply = () => {
    applyRequestMutation.mutate(application.request_id, {
      onSuccess: () => {
        console.log("Заявка принята", application.request_id);
        onToggle(null);
      },
      onError: (error) => {
        console.error("Ошибка принятия заявки:", error);
      },
    });
  };

  const handleDeny = () => {
    denyRequestMutation.mutate(application.request_id, {
      onSuccess: () => {
        console.log("Заявка отклонена", application.request_id);
        onToggle(null);
      },
      onError: (error) => {
        console.error("Ошибка отклонения заявки:", error);
      },
    });
  };

  return (
    <div
      ref={dropdownRef}
      className="relative flex w-full flex-row gap-8 px-2 py-4 text-left">
      <ApplicationText application={application} />

      {application.status !== "Заявка отклонена" &&
      application.status !== "Заявка одобрена" ? (
        <button className="z-0 min-w-[22px]" onClick={handleClick}>
          <img src={Dots} />
        </button>
      ) : (
        <div className="z-0 min-w-[22px]"></div>
      )}

      {isActive &&
        application.status !== "Заявка отклонена" &&
        application.status !== "Заявка одобрена" && (
          <div className="absolute right-0 top-[40px] flex justify-end">
            <div className="z-10 flex w-fit flex-col gap-2 rounded-[16px] bg-card p-2">
              <button
                className="h-[40px] px-4 pb-[10px] pt-2 text-left"
                onClick={handleApply}>
                <p>Принять</p>
              </button>
              <button
                className="h-[40px] px-4 pb-[10px] pt-2 text-left"
                onClick={handleDeny}>
                <p>Отклонить</p>
              </button>
            </div>
          </div>
        )}
    </div>
  );
};
