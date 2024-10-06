import Button from "src/shared/ui/button/Button";
import { LogoUDV } from "src/shared/ui/logo/logo";
import { Mail } from "src/components/mail/Mail";

export function AuthPage() {
    return (
        <>
            <div className="flex h-screen">
                <div className=" w-[400px] bg-card rounded-[16px] mx-auto my-auto px-[40px] py-[48px] flex flex-col gap-[40px] justify-between">
                    <LogoUDV width={"w-[160px]"} />
                    <Mail />
                    <Button
                        buttonType="mint"
                        link={"/check-mail"}
                        text="Получить ссылку для входа"
                        textColor="light"
                    />
                </div>
            </div>
        </>
    );
}
