import { useState } from "react";
import { Modal } from "src/shared/ui/modal";
import { Button } from "src/shared/ui";
import Toggle from "src/shared/ui/toggle/Toggle";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  closeBtn: boolean;
};

export const EditEmployeeModal = ({ isOpen, closeModal }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="relative z-10 w-[500px] rounded-[16px] bg-card p-6 px-[40px] py-[48px]">
          <div className="flex flex-col gap-[32px]">
            <h1 className="text-[28px] leading-[36px]">
              Редактирование сотрудника
            </h1>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="opacity-60">ФИО</p>
                <p>Соколова Александра Александровна</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="opacity-60">Должность</p>
                <p>Менеджер по персоналу</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="opacity-60">Почта</p>
                <p>sokolova@udv.ru</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1>Администрирование</h1>
              <p>
                Администратор может создавать, редактировать, удалять бенефиты и
                читать обращения сотрудников
              </p>
              <div className="flex flex-row gap-2">
                <Toggle isChecked={isChecked} onToggle={handleToggle} />
                <p>Администратор</p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <Button
                text={"Сохранить"}
                textColor={"light"}
                buttonType={"primary"}
              />

              <Button
                onClick={closeModal}
                text={"Отмена"}
                textColor={"dark"}
                buttonType={"secondary"}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
