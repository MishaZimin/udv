import { useState } from "react";
import { Input, Checkbox, Button, Loader } from "src/shared/ui";
import { useLogin } from "../api/mutations/use-login";
import { useMailStore } from "../stores/use-user-mail-stroe";

export const MailForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [mail, setMail] = useState<string>("");
  const [inputType, setInputType] = useState<"default" | "error">("default");
  // const [isMail, setIsMail] = useState(true);

  const { setMail: setMailToStore } = useMailStore();

  const { mutate: login, isPending } = useLogin({
    onError: (error) => {
      if (error?.response?.status === 400) {
        setInputType("error");
      }
    },
  });

  const handleClick = () => {
    setInputType("default");
    login({ email: mail });
    setMailToStore(mail);
  };

  const handleMailChange = (value: string) => {
    setMail(value);

    if (value) {
      setInputType("default");
    }

    // if (value.includes("@")) {
    //   setIsMail(false);
    // } else {
    //   setIsMail(true);
    // }
  };

  return (
    <>
      {isPending && <Loader />}
      <>
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[4px] text-[14px]">
            <p className="leading-[20px]">Почта</p>
            <Input
              inputType={inputType}
              mail={false}
              onChange={handleMailChange}
              value={mail}
              errorText="Такой почты нет. Проверьте, возможно, вы ошиблись"
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
          onClick={handleClick}
          text="Получить ссылку для входа"
          textColor="light"
          disabled={isPending}
        />
      </>
    </>
  );
};
