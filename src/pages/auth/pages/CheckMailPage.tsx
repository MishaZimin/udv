import Button from "src/shared/ui/button/Button";
import { LogoUDV } from "src/shared/ui/logo/logo";
import { CheckMail } from "src/components/mail/CheckMail";
import { useGoBack } from "src/shared/hooks/useGoBack";
import { AuthLayout } from "..";

export function CheckMailPage() {
  return (
    <AuthLayout>
      <LogoUDV width={"w-[160px]"} />
      <CheckMail />
      <div className="flex flex-col gap-[8px]">
        <Button
          text="Вернуться назад"
          textColor="dark"
          onClick={useGoBack()}
          buttonType="white"
        />
        <Button
          text="Сотрудник"
          textColor="light"
          link={"/"}
          buttonType="mint"
        />
        <Button text="HR" textColor="light" link={"/"} buttonType="mint" />
      </div>
    </AuthLayout>
  );
}
