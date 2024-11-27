import { Button } from "src/shared/ui";
import { BigModal } from "src/shared/ui/modal/ui/BigModal";
import { TextLoader } from "src/shared/ui/loader/TextLoader";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  applicationId: string;
  applicationImg?: string;
  application?: {
    application_name: string;
    application_status: string;
    creation_date: string;
    user_name: string;
  };
};

export const ApplicationModal = ({
  isOpen,
  closeModal,
  application,
  //   applicationId,
  //   applicationImg,
}: Props) => {
  const isLoading = false;

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const header = isLoading ? (
    <TextLoader height="36px" backgroundColor="bg-white" />
  ) : (
    <>
      <p>{application?.application_name}</p>
    </>
  );

  const footer = (
    <>
      <Button
        text={"Одобрить"}
        textColor={"light"}
        buttonType={"primary"}
        onClick={() => {}}
        //   disabled={isSubmitLoading}
      />
      <Button
        text={"Отклонить"}
        textColor={"light"}
        buttonType={"red"}
        onClick={closeModal}
        //   disabled={isSubmitLoading}
      />
    </>
  );

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
          {application?.application_status}
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
