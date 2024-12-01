/* eslint-disable @typescript-eslint/no-explicit-any */
export const BenefitUsageItems = ({ data }: { data: any }) => {
  const { бенефиты } = data;

  const benefitsArray = Object.entries(бенефиты).map(
    ([name, stats]: [string, any]) => ({
      name,
      approved: stats.Одобрено,
      pending: stats.Ожидает,
      declined: stats.Отказано,
      total: stats.Одобрено + stats.Ожидает + stats.Отказано,
    }),
  );

  return (
    <div>
      <div className="flex flex-wrap gap-[8px]">
        {benefitsArray.map((benefit, index) => (
          <div
            key={index}
            className="flex h-[38px] items-center gap-[12px] rounded-[8px] bg-card px-[12px] py-2">
            <p className="h-4 w-4 rounded-full bg-graphite bg-opacity-[16%] leading-[20px]"></p>
            <p>{benefit.name}</p>
            <p className="font-semibold leading-[20px]">{benefit.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
