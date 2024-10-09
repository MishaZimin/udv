import { CreateBenefitLayout } from "./CreateBenefitLayout";
import { Benefit } from "src/components/benefit/Benefit";

export function CoverPage() {
    return (
        <CreateBenefitLayout>
            <div className="flex flex-row gap-[32px]">
                <div className="w-full flex flex-col gap-[16px]">
                    <p className="font-semibold text-[20px]">Обложка</p>
                    <p className="w-[70%]">
                        Загружайте изображение бенефита на фоне цвета #EEF0F2
                    </p>
                    <div className="w-full h-[240px] flex flex-col gap-[8px] border border-dashed rounded-[8px]">
                        <div className="my-auto">
                            <p className="font-semibold text-center">
                                Загрузите картинку 1280 x 720
                            </p>
                            <p className="text-center">
                                Перетащите файл или{" "}
                                <a className="text-mint" href="">
                                    нажмите загрузить
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <p className="font-semibold text-[20px]">Превью</p>
                    <Benefit
                        title={"Cover"}
                        subtext={"Cover"}
                        isNewTag={true}
                        link={""}
                    />
                </div>
            </div>
        </CreateBenefitLayout>
    );
}
