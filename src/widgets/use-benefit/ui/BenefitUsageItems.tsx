export const BenefitUsageItems = () => {
  const benefits = [
    { id: 1, name: "Страхование", count: 124 },
    { id: 2, name: "Компенсация питания", count: 245 },
    { id: 3, name: "Корпоративное такси", count: 78 },
    { id: 4, name: "Трансфер", count: 243 },
    { id: 5, name: "Компенсация спорта", count: 134 },
    { id: 6, name: "Массаж", count: 84 },
    { id: 7, name: "Корпоративная йога", count: 16 },
    { id: 8, name: "Компенсация английского", count: 153 },
    { id: 9, name: "Апгрейд рабочего места", count: 122 },
    { id: 10, name: "Подписки на сервисы за U-койны", count: 106 },
    { id: 11, name: "Мерч", count: 124 },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-[8px]">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex h-[38px] items-center gap-[12px] rounded-[8px] bg-card px-[12px] py-2">
            <p className="h-4 w-4 rounded-full bg-graphite bg-opacity-[16%] leading-[20px]"></p>
            <p>{benefit.name}</p>
            <p className="font-semibold leading-[20px]">{benefit.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
