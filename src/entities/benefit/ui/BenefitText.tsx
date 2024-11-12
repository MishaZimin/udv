type Props = {
  name: string;
  card_name: string;
};

export const BenefitText = ({ name, card_name }: Props) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="h-[20px] text-left text-[16px] font-semibold leading-[20px]">
        {name}
      </p>
      <p className="h-[16px] text-left text-[12px] font-normal leading-[16px] text-opacity-[60%]">
        {card_name}
      </p>
    </div>
  );
};
