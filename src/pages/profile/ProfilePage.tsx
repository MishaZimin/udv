import Layout from 'src/components/layout/Layout';

// interface IProfile {
//     name: string;
//     level: string;
//     exp: string;
//     packageBenefit: string;
//     job: string;
// }
// {
//     name,
//     level,
//     exp,
//     packageBenefit,
//     job,
// }: IProfile

export function ProfilePage() {
  return (
    <Layout>
      <div className=" flex flex-col w-full h-[500px] bg-white p-[0px] rounded-[16px]">
        <div className="flex flex-row gap-[24px] pb-[48px]">
          <div className="flex flex-col gap-[12px]">
            <p className="font-semibold text-[28px] leading-[36px]">
              Имя Фамилия
              {/* {name} */}
            </p>
            <div className="flex flex-col gap-[8px]">
              <p className="">
                Java-разработчик
                {/* {job} */}
              </p>

              <p className=" opacity-[60%]">ООО «UDV Group», UDV ITM</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[64px] py-[32px] w-full bg-card rounded-[16px] justify-center">
          <div className="h-[54px] flex flex-col gap-[4px]">
            <p className="text-center">Уровень</p>
            <p className="font-semibold text-[20px] leading-[28px] text-center">
              Junior
              {/* {level} */}
            </p>
          </div>
          <div className="h-[54px]  flex flex-col gap-[4px]">
            <p className="text-center">Опыт в компании</p>
            <p className="font-semibold text-[20px] leading-[28px] text-center">
              1 год 1 месяц
              {/* {exp} */}
            </p>
          </div>

          <div className="h-[54px] flex flex-col gap-[4px]">
            <p className="text-center">Пакет бенефитов</p>
            <p className="font-semibold text-[20px] leading-[28px] text-center">
              Startert pack
              {/* {packageBenefit} */}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
