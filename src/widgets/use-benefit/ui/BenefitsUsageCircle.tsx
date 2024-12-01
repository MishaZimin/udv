/* eslint-disable @typescript-eslint/no-explicit-any */
export const BenefitsUsageCircle = ({ data }: { data: any }) => {
  const { бенефиты, пользуются_бенефитами, соотношение_использования } = data;

  const benefitsArray = Object.entries(бенефиты).map(
    ([name, stats]: [string, any]) => ({
      name,
      total: stats.Одобрено + stats.Ожидает + stats.Отказано,
    }),
  );

  const totalBenefitsUsage = benefitsArray.reduce(
    (sum, benefit) => sum + benefit.total,
    0,
  );

  const benefitsWithPercentages = benefitsArray.map((benefit) => ({
    ...benefit,
    percentage: parseFloat(
      ((benefit.total / totalBenefitsUsage) * 100).toFixed(2),
    ),
  }));

  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="flex w-full flex-row justify-between gap-8">
      <div className="w-full">
        <div className="flex flex-wrap gap-[8px]">
          {benefitsWithPercentages.map((benefit, index) => (
            <button
              key={index}
              className="animation flex h-[38px] items-center gap-[12px] rounded-[8px] bg-card px-[12px] py-2 hover:bg-graphite hover:bg-opacity-[6%]">
              <p
                className="h-4 w-4 rounded-full leading-[20px]"
                style={{ backgroundColor: getColor(index) }}></p>
              <p>{benefit.name}</p>
              <p className="font-semibold leading-[20px]">{benefit.total}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col items-center">
        <svg
          className="relative"
          width="240"
          height="240"
          viewBox="0 0 240 240"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="transparent"
            stroke="#E5E7EB"
            strokeWidth="16"
          />
          {benefitsWithPercentages.map((benefit, index) => {
            const strokeDasharray = `${
              (benefit.percentage / 100) * circumference
            } ${circumference}`;
            const sector = (
              <circle
                key={index}
                cx="120"
                cy="120"
                r={radius}
                fill="transparent"
                stroke={getColor(index)}
                strokeWidth="16"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={-offset}
              />
            );
            offset += (benefit.percentage / 100) * circumference;
            return sector;
          })}
        </svg>
        <div className="absolute mt-[48px] flex flex-col gap-2 text-center">
          <p className="text-lightgraphite">
            Используют
            <br /> бенефиты
          </p>
          <div>
            <h1 className="text-[32px] leading-[40px]">
              {пользуются_бенефитами}
            </h1>
            <p className="text-lightgraphite">сотрудника</p>
          </div>
          <p className="text-lightgraphite">{соотношение_использования}%</p>
        </div>
      </div>
    </div>
  );
};

const getColor = (index: number) => {
  const colors = [
    "#2196F3",
    "#FFC107",
    "#FF5722",
    "#0B202799",
    "#1C4D58",
    "#D13838",
    "#4CAF50",
    "#8BC34A",
    "#E91E63",
    "#FF9800",
  ];
  return colors[index % colors.length];
};
