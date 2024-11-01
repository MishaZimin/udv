import { useState } from "react";

export const SecondQuestion = () => {
  const [selectedSmile, setSelectedSmile] = useState<number | null>(null);

  const smiles = [
    { id: 1, smile: "😣" },
    { id: 2, smile: "🙁" },
    { id: 3, smile: "😐" },
    { id: 4, smile: "🙂" },
    { id: 5, smile: "😊" },
  ];

  const toggleSmile = (id: number) => {
    setSelectedSmile((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-[40px]">
      <p className="text-left text-[28px] font-semibold leading-[36px]">
        Насколько вы довольны сервисом?
      </p>
      <div className="flex flex-row justify-center gap-[8px]">
        {smiles.map((smile) => (
          <button
            key={smile.id}
            onClick={() => toggleSmile(smile.id)}
            className={`h-[50px] w-[50px] rounded-full bg-graphite bg-opacity-[4%] sm:h-16 sm:w-16 ${
              selectedSmile === smile.id
                ? "bg-opacity-100"
                : "hover:bg-opacity-[8%]"
            }`}
          >
            <p className="text-[32px]">{smile.smile}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
