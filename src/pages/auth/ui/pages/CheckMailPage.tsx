import { Button, LogoUDV } from "src/shared/ui";
import { CheckMail } from "src/widgets/auth-form/ui/CheckMail";
import { AuthLayout } from "../layout/AuthLayout";
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
      </div>
    </AuthLayout>
  );
};
