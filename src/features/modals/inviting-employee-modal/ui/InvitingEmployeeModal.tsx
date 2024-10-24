import { useState } from "react";
import { Modal } from "src/shared/ui/modal";
import { Button } from "src/shared/ui";
import Toggle from "src/shared/ui/toggle/Toggle";
import { Input } from "src/shared/ui";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  closeBtn: boolean;
};

export const InvitingEmployeeModal = ({ isOpen, closeModal }: Props) => {
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
              Приглашение сотрудника
            </h1>
            <p>
              Для добавления сотрудника укажите почту, мы вышлем
              ссылку-приглашение. После подтверждения адреса почты он получит
              доступ в сервис.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p>Почта</p>
                <Input
                  inputType={"default"}
                  onChange={() => {}}
                  value={""}
                  mail={true}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p>Почта</p>
                <Input inputType={"default"} onChange={() => {}} value={""} />
              </div>
              <div className="flex flex-col gap-1">
                <p>Почта</p>
                <Input inputType={"default"} onChange={() => {}} value={""} />
              </div>
              <div className="flex flex-col gap-1">
                <p>Почта</p>
                <Input inputType={"default"} onChange={() => {}} value={""} />
              </div>
              <div className="flex flex-col gap-1">
                <p>Почта</p>
                <Input inputType={"default"} onChange={() => {}} value={""} />
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
                text={"Получить ссылку для входа"}
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
