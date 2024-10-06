import Button from "src/shared/ui/button/Button";
import { useGoBack } from "src/shared/hooks/useGoBack";

export function ExitPage() {
    return (
        <>
            <div className="flex h-screen">
                <div className=" w-[400px] bg-card rounded-[16px] mx-auto my-auto px-[40px] py-[48px] flex flex-col gap-[32px] justify-between">
                    <p className="font-semibold text-center text-[20px] w-[190px] mx-auto">
                        Вы уверены, что хотите выйти?
                    </p>
                    <div className="flex flex-col gap-[8px] w-full">
                        <Button
                            buttonType="red"
                            link={"/auth"}
                            text="Выйти"
                            textColor="light"
                        />
                        <Button
                            buttonType="white"
                            onClick={useGoBack()}
                            text="Отмена"
                            textColor="dark"
                        />
                        {/* <Button
                            buttonType="mint"
                            onClick={useGoBack()}
                            text="Далее"
                            textColor="light"
                        /> */}
                    </div>
                </div>
            </div>
        </>
    );
}
