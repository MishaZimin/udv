import { LogoUDV } from "src/shared/ui";
import { Mail } from "src/widgets/mail/ui/Mail";
import { AuthLayout } from "..";

export const AuthPage = () => {
  return (
    <AuthLayout>
      <LogoUDV />
      <Mail />
      {/* <Button
        buttonType="primary"
        link={"/check-mail"}
        text="Получить ссылку для входа"
        textColor="light"
      /> */}
    </AuthLayout>
  );
};
