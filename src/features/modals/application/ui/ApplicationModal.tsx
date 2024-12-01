import { Button } from "src/shared/ui";
import { BigModal } from "src/shared/ui/modal/ui/BigModal";
import { TextLoader } from "src/shared/ui/loader/TextLoader";
import { useApplyRequest } from "src/entities/application/api/mutations/use-apply-request";
import { useDenyRequest } from "src/entities/application/api/mutations/use-deny-request";
import { useAdminRequest } from "../api/queries/use-application";
import { LoadersList } from "src/shared/ui/loader/LoadersList";

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
  const { data, isLoading, isError, error } = useAdminRequest(
    application.request_id,
  );

  const applyRequestMutation = useApplyRequest();
  const denyRequestMutation = useDenyRequest();

  if (!isLoading) {
    console.log(data);
  } else {
    return;
  }
  if (isError) {
    return <p>error: {error.message}</p>;
  }
  if (!data) {
    return <p>no data</p>;
  }

  const dataUser = data.user;
  console.log(dataUser);

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
          disabled={isLoading}
        />
        <Button
          text={"Отклонить"}
          textColor={"light"}
          buttonType={"red"}
          onClick={handleDeny}
          disabled={isLoading}
        />
      </>
    ) : null;

  const children = isLoading ? (
    <LoadersList count={8}>
      <TextLoader />
    </LoadersList>
  ) : (
    <div className="mb-4 mt-2 flex flex-col gap-4">
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

      {data.additional_info && (
        <>
          <div className="flex flex-col gap-[4px]">
            <p className="text-[14px] leading-[20px] opacity-[60%]">Для кого</p>
            <p className="text-left text-[16px] leading-[22px]">
              {data.additional_info[0] || ""}
            </p>
          </div>

          <div className="flex flex-col gap-[4px]">
            <p className="text-[14px] leading-[20px] opacity-[60%]">
              Тип страхования
            </p>
            <p className="text-left text-[16px] leading-[22px]">
              {data.additional_info[1] || ""}
            </p>
          </div>
        </>
      )}
      {data?.attached_files?.length > 0 && (
        <div className="flex flex-col gap-1">
          <p className="text-[14px] leading-[20px] opacity-[60%]">Файлы</p>
          <div className="grid grid-cols-2 gap-4">
            {data?.attached_files?.map((file: string, index: number) => (
              <div key={index} className="flex flex-col justify-between gap-2">
                <a href={file} target="_blank" rel="noopener noreferrer">
                  <img
                    className="rounded-[8px]"
                    src={file}
                    alt="attached file"
                  />
                </a>
                <a
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animation hover:text-graphiteactive text-graphite">
                  Файл {index + 1}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="h-[1px] w-full bg-graphite bg-opacity-[8%]"></div>

      {dataUser && (
        <>
          <div className="flex flex-col gap-[4px]">
            <p className="text-[14px] leading-[20px] opacity-[60%]">
              Сотрудник
            </p>
            <p className="text-left text-[16px] leading-[22px]">
              {dataUser.full_name}
            </p>
          </div>

          <div className="flex flex-col gap-[4px]">
            <p className="text-[14px] leading-[20px] opacity-[60%]">Почта</p>
            <p className="text-left text-[16px] leading-[22px]">
              {dataUser.email}
            </p>
          </div>

          <div className="flex flex-col gap-[4px]">
            <p className="text-[14px] leading-[20px] opacity-[60%]">
              Должность
            </p>
            <p className="text-left text-[16px] leading-[22px]">
              {dataUser.position}
            </p>
          </div>

          <div className="flex flex-col gap-[4px]">
            <p className="text-[14px] leading-[20px] opacity-[60%]">Стаж</p>
            <p className="text-left text-[16px] leading-[22px]">
              {dataUser.employment_date}
            </p>
          </div>

          <div className="flex flex-col gap-[4px]">
            <p className="text-[14px] leading-[20px] opacity-[60%]">
              Место работы
            </p>
            <p className="text-left text-[16px] leading-[22px]">
              {dataUser.place_of_employment}
            </p>
          </div>
        </>
      )}
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
