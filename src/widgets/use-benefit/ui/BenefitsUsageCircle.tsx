export const BenefitsUsageCircle = () => {
  const totalEmployees = 789;

  return (
    <div className="flex flex-col items-center">
      <div className="flex h-[240px] w-[240px] items-center justify-center rounded-full border-[16px] border-gray-300">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-lightgraphite">
            Используют
            <br /> бенефиты
          </p>
          <div>
            <h1 className="text-[32px] leading-[40px]">{totalEmployees}</h1>
            <p className="text-lightgraphite">сотрудников</p>
          </div>
          <p className="text-lightgraphite">100%</p>
        </div>
      </div>
    </div>
  );
};
