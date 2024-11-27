import { ApplicationModal } from "src/features/modals/application/ui/ApplicationModal";
import { TApplicationItem } from "../../../pages/applications/model/applicationItem.type";
import { useModal } from "src/shared/ui";

type Props = {
  application: TApplicationItem;
};

const nameStatus: { [key: string]: string } = {
  "Заявка в обработке": "Ожидает",
  "Заявка отклонена": "Отклонена",
  "Заявка одобрена": "Завершена",
  "Заявка завершена": "Завершена",
};

export const ApplicationText = ({ application }: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <>
      <button
        className="flex w-full flex-row items-start gap-[32px]"
        onClick={openModal}>
        <p className="w-[30%] text-left">{application.name}</p>
        <p className="w-[30%] text-left">{application.user_name}</p>
        <p className="w-[15%] text-left">
          {formatDate(application.creation_date)}
        </p>
        <p className="w-[25%] text-left">{nameStatus[application.status]}</p>
      </button>
      <ApplicationModal
        isOpen={isOpen}
        closeModal={closeModal}
        applicationId={"1"}
        application={{
          application_name: application.name,
          application_status: application.status,
          creation_date: application.creation_date,
          user_name: application.user_name,
          request_id: application.request_id,
        }}
      />
    </>
  );
};
