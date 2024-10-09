import { Menu } from "src/components/menu/Menu";
import { BackButton } from "src/shared/ui/button/BackButton";
import { CREATEBENEFIT } from "src/components/menu/menu.data";
import Button from "src/shared/ui/button/Button";
interface Props {
    children: React.ReactNode;
}
export function CreateBenefitLayout(props: Props) {
    return (
        <>
            <div className="mx-auto h-svh w-[1024px]">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-[8px] py-[32px]">
                        <BackButton link={"/admin/benefit"} />
                        <p className="font-semibold text-[32px]">
                            Создание бенефита
                        </p>
                    </div>
                    <div className="flex flex-row gap-[32px] mb-[32px]">
                        <Menu menu={CREATEBENEFIT} orientation="vertical" />
                        <div className="w-full bg-white p-[0px] rounded-[16px]">
                            <div className="flex flex-col gap-[24px]">
                                {props.children}
                                <Button
                                    text={"Создать бенефит"}
                                    textColor={"unActive"}
                                    buttonType={"unActive"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
