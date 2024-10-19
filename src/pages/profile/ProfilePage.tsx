import Survey from "src/components/survey/Survey";
import { BackButton } from "src/shared/ui/button/BackButton";

export function ProfilePage() {
  return (
    <>
      <div className="mx-auto h-full w-full pt-[32px] lg:w-[1024px]">
        <div className="flex w-full flex-col rounded-[16px] bg-white p-[0px]">
          <div className="flex flex-row gap-[24px] pb-[32px]">
            <div className="flex flex-row gap-[8px]">
              <BackButton link="back" />
              <p className="text-[28px] font-semibold leading-[36px]">
                Константин Сергеев
                {/* {name} */}
              </p>
            </div>
          </div>
          <Survey />
          <div className="flex w-full flex-row justify-center gap-[48px] rounded-[16px] bg-card py-[32px]">
            <div className="flex flex-col gap-[4px]">
              <p className="">
                Должность
                {/* {job} */}
              </p>

              <p className="text-center text-[16px] font-semibold leading-[20px]">
                Java-разработчик
              </p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="">Опыт в компании</p>
              <p className="text-[16px] font-semibold leading-[20px]">
                1 год 1 месяц
                {/* {exp} */}
              </p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="">Место работы</p>

              <p className="otext-center text-[16px] font-semibold leading-[20px]">
                ООО «UDV Group», UDV ITM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
