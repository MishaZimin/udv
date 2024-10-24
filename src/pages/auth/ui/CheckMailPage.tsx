import { Button, LogoUDV } from "src/shared/ui";
import { CheckMail } from "src/widgets/mail/ui/CheckMail";
import { useGoBack } from "src/shared/hooks/useGoBack";
import { AuthLayout } from "..";

export const CheckMailPage = () => {
  return (
    <AuthLayout>
      <LogoUDV type="default" />
      <CheckMail />
      <div className="flex flex-col gap-[8px]">
        <Button
          text="Вернуться назад"
          textColor="dark"
          onClick={useGoBack()}
          buttonType="secondary"
        />
        <Button
          text="Сотрудник"
          textColor="light"
          link={"/"}
          buttonType="primary"
        />
        <Button text="HR" textColor="light" link={"/"} buttonType="primary" />
      </div>
    </AuthLayout>
  );
};
