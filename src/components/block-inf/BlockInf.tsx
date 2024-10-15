type Props = {
  description: string;
  setDescription: (value: string) => void;
};

export function DescriptionArea({ description, setDescription }: Props) {
  return (
    <div className="flex flex-col gap-[8px]">
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание блока"
        className="animation min-h-[160px] w-full rounded-[8px] border border-graphite border-opacity-[20%] px-[12px] pb-[10px] pt-[8px] focus:border-opacity-[80%] focus:outline-none"
      />
    </div>
  );
}
