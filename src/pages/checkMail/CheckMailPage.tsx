import Button from "src/shared/ui/button/Button";
import { LogoUDV } from "src/shared/ui/logo/logo";
import { CheckMail } from "src/components/mail/CheckMail";
import { useGoBack } from "src/shared/hooks/useGoBack";

export function CheckMailPage() {
    return (
        <>
            <div className="flex h-screen">
                <div className=" w-[400px] bg-card rounded-[16px] mx-auto my-auto px-[40px] py-[48px] flex flex-col gap-[40px] justify-between">
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
                        <Button
                            text="HR"
                            textColor="light"
                            link={"/"}
                            buttonType="mint"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
