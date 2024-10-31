import { useState } from "react";
import { Input, Checkbox, Button } from "src/shared/ui";
import { useLogin } from "../model/hooks/useLogin";

export const Mail = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [mail, setMail] = useState<string>("");
  const { mutate: login } = useLogin();
  //, isLoading, isError, isSuccess

  const hadleClick = () => {
    login({ email: mail });
  };

  return (
    <>
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[4px] text-[14px]">
          <p className="leading-[20px]">Почта</p>
          <Input
            inputType={"default"}
            mail={false}
            onChange={setMail}
            value={mail}
          />
        </div>
        <div className="flex h-[20px] flex-row gap-[8px]">
          <Checkbox
            checked={isChecked}
            onChange={setIsChecked}
            text={"Запомнить меня"}
          />
          <p className="text-[12px]"></p>
        </div>
      </div>

      <Button
        buttonType="primary"
        onClick={hadleClick}
        text="Получить ссылку для входа"
        textColor="light"
      />
    </>
  );
};
