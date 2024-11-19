export const ServiceSatisfaction = () => {
  const ratings = [
    { id: 1, count: 2 },
    { id: 2, count: 13 },
    { id: 3, count: 24 },
    { id: 4, count: 43 },
    { id: 5, count: 215 },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="">Удовлетворённость сервисом</h1>
      <div className="flex w-[320px] flex-row gap-[28px] rounded-[16px] bg-card px-6 py-4">
        {ratings.map((rating, index) => (
          <div key={rating.id} className="flex flex-col items-center gap-1">
            <p className="text-[32px] leading-[40px]">
              {["😟", "🙁", "😐", "🙂", "😊"][index]}
            </p>
            <p className="">{rating.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
