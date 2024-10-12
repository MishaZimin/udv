import Layout from "src/components/layout/Layout";

export function ProfilePage() {
    return (
        <Layout>
            <div className=" flex flex-col w-full h-[500px] bg-white p-[0px] rounded-[16px]">
                <div className="flex flex-row gap-[24px] pb-[48px]">
                    <div className="flex flex-col gap-[12px]">
                        <p className="font-semibold text-[28px] leading-[36px]">
                            Имя Фамилия
                        </p>
                        <div className="flex flex-col gap-[8px]">
                            <p className="">Java-разработчик</p>

                            <p className=" opacity-[60%]">
                                ООО «UDV Group», UDV ITM
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-[64px] py-[32px] w-full bg-card rounded-[16px] justify-center">
                    <div className="h-[54px] flex flex-col gap-[4px]">
                        <p className="">Уровень</p>
                        <p className="font-semibold text-[20px] leading-[28px]">
                            Junior
                        </p>
                    </div>
                    <div className="h-[54px]  flex flex-col gap-[4px]">
                        <p className="">Опыт в компании</p>
                        <p className="font-semibold text-[20px] leading-[28px]">
                            1 год 1 месяц
                        </p>
                    </div>

                    <div className="h-[54px] flex flex-col gap-[4px]">
                        <p className="">Пакет бенефитов</p>
                        <p className="font-semibold text-[20px] leading-[28px]">
                            Startert pack
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
