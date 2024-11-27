import { Button } from "src/shared/ui";
import { BigModal } from "src/shared/ui/modal/ui/BigModal";
import { TextLoader } from "src/shared/ui/loader/TextLoader";
import { useApplyRequest } from "src/entities/application/api/mutations/use-apply-request";
import { useDenyRequest } from "src/entities/application/api/mutations/use-deny-request";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  applicationId: string;
  applicationImg?: string;
  application: {
    application_name: string;
    application_status: string;
    creation_date: string;
    user_name: string;
    request_id: number;
  };
};

const nameStatus: { [key: string]: string } = {
  "Заявка в обработке": "Ожидает",
  "Заявка отклонена": "Отклонена",
  "Заявка одобрена": "Завершена",
  "Заявка завершена": "Завершена",
};

export const ApplicationModal = ({
  isOpen,
  closeModal,
  application,
  //   applicationId,
  //   applicationImg,
}: Props) => {
  const applyRequestMutation = useApplyRequest();
  const denyRequestMutation = useDenyRequest();

  const isLoading = false;

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleApply = () => {
    console.log(application.request_id);
    applyRequestMutation.mutate(application.request_id, {
      onSuccess: () => {
        console.log("Заявка принята", application.request_id);
        closeModal();
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
        closeModal();
      },
      onError: (error) => {
        console.error("Ошибка отклонения заявки:", error);
      },
    });
  };

  const header = isLoading ? (
    <TextLoader height="36px" backgroundColor="bg-white" />
  ) : (
    <>{application?.application_name}</>
  );

  const footer =
    application.application_status !== "Заявка отклонена" &&
    application.application_status !== "Заявка одобрена" ? (
      <>
        <Button
          text={"Одобрить"}
          textColor={"light"}
          buttonType={"primary"}
          onClick={handleApply}
          //   disabled={isSubmitLoading}
        />
        <Button
          text={"Отклонить"}
          textColor={"light"}
          buttonType={"red"}
          onClick={handleDeny}
          //   disabled={isSubmitLoading}
        />
      </>
    ) : null;

  const children = isLoading ? (
    <div className="mt-2 flex flex-col gap-4">
      <p>application text</p>
    </div>
  ) : (
    <div className="mt-2 flex flex-col gap-4">
      <div className="flex flex-col gap-[4px]">
        <p className="text-[14px] leading-[20px] opacity-[60%]">Бенефит</p>
        <p className="text-left text-[16px] leading-[22px]">
          {application?.application_name}
        </p>
      </div>

      <div className="flex flex-col gap-[4px]">
        <p className="text-[14px] leading-[20px] opacity-[60%]">Сотрудник</p>
        <p className="text-left text-[16px] leading-[22px]">
          {application?.user_name}
        </p>
      </div>

      <div className="flex flex-col gap-[4px]">
        <p className="text-[14px] leading-[20px] opacity-[60%]">Дата подачи</p>
        <p className="text-left text-[16px] leading-[22px]">
          {formatDate(application?.creation_date || "")}
        </p>
      </div>

      <div className="flex flex-col gap-[4px]">
        <p className="text-[14px] leading-[20px] opacity-[60%]">Статус</p>
        <p className="text-left text-[16px] leading-[22px]">
          {nameStatus[application?.application_status]}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <BigModal
        isOpen={isOpen}
        onClose={closeModal}
        closeModal={closeModal}
        header={header}
        footer={footer}
        children={children}
      />
    </>
  );
};
