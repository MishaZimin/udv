import Button from "src/shared/ui/button/Button";
import { LogoUDV } from "src/shared/ui/logo/logo";
import { Mail } from "src/components/mail/Mail";
import { AuthLayout } from "..";

export function AuthPage() {
  return (
    <AuthLayout>
      <LogoUDV width={"w-[160px]"} />
      <Mail />
      <Button
        buttonType="mint"
        link={"/check-mail"}
        text="Получить ссылку для входа"
        textColor="light"
      />
    </AuthLayout>
  );
}
