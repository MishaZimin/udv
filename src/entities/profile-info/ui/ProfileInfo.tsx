export const ProfileInfo = () => {
  return (
    <>
      <div className="mb-[32px] flex w-full flex-col justify-between gap-[16px] rounded-[16px] bg-card p-8 md:flex-row">
        <div className="flex flex-col gap-[4px]">
          <p className="">ФИО</p>

          <p className="text-left text-[16px] font-semibold leading-[20px]">
            Сергеев Константин Юрьевич
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="">Должность</p>

          <p className="text-left text-[16px] font-semibold leading-[20px]">
            Java-разработчик
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="">Опыт в компании</p>
          <p className="text-left text-[16px] font-semibold leading-[20px]">
            1 год 1 месяц
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="">Место работы</p>

          <p className="text-left text-[16px] font-semibold leading-[20px]">
            ООО «UDV Group», UDV ITM
          </p>
        </div>
      </div>
    </>
  );
};
