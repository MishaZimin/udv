import { Button, LogoUDV } from "src/shared/ui";
import { CheckMail } from "src/widgets/mail/ui/CheckMail";
import { AuthLayout } from "..";
import { useNavigate } from "react-router-dom";

export const CheckMailPage = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <LogoUDV />
      <CheckMail />
      <div className="flex flex-col gap-[8px]">
        <Button
          text="Вернуться назад"
          textColor="dark"
          onClick={() => navigate(-1)}
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