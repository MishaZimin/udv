type Props = {
  text: string;
};

export const Badge = ({ text }: Props) => {
  return (
    <div className="absolute right-[-8px] top-[-8px] rounded-full bg-yellow px-[8px] pb-[4px] pt-[2px]">
      <p className="text-darkblue">{text}</p>
    </div>
  );
};
