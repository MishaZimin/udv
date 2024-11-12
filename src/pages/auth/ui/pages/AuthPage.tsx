import { LogoUDV } from "src/shared/ui";
import { MailForm } from "src/widgets/auth-form/ui/MailForm";
import { AuthLayout } from "../..";

export const AuthPage = () => {
  return (
    <AuthLayout>
      <LogoUDV />
      <MailForm />
      {/* <Button
        buttonType="primary"
        link={"/check-mail"}
        text="Получить ссылку для входа"
        textColor="light"
      /> */}
    </AuthLayout>
  );
};
