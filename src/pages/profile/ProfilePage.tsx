import Layout from "src/components/layout/Layout";
import Profile from "src/shared/image/Profile.svg";

export function ProfilePage() {
    return (
        <Layout>
            <div className=" flex flex-col w-full h-[500px] bg-white p-[0px] rounded-[16px]">
                <div className="flex flex-row gap-[24px] pb-[48px]">
                    <div className="w-[100px] h-[100px] rounded-full bg-card duration-300 transform hover:shadow-sm">
                        <img
                            src={Profile}
                            alt="avatar"
                            className="w-full p-[8px]"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-[28px]">Имя Фамилия</p>
                        <p className="">Java-разработчик</p>

                        <p className=" opacity-[60%]">
                            ООО «UDV Group», UDV ITM
                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-[64px] py-[32px] w-full bg-card rounded-[16px] justify-center">
                    <div className="h-[54px]">
                        <p className="">Уровень</p>
                        <p className="font-semibold text-[20px]">Junior</p>
                    </div>
                    <div className="h-[54px]  ">
                        <p className="">Опыт в компании</p>
                        <p className="font-semibold text-[20px]">
                            1 год 1 месяц
                        </p>
                    </div>

                    <div className="h-[54px]">
                        <p className="">Пакет бенефитов</p>
                        <p className="font-semibold text-[20px]">
                            Startert pack
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
