import { useCardStore } from "src/shared/stores/use-card-store";
import { DescriptionArea } from "src/features/description-area";
import { Input } from "src/shared/ui";

export const BenefitDetails = () => {
  const name = useCardStore((state) => state.name);
  const setName = useCardStore((state) => state.setName);

  const subtext = useCardStore((state) => state.subtext);
  const setSubtext = useCardStore((state) => state.setSubtext);

  const description = useCardStore((state) => state.description);
  const setDescription = useCardStore((state) => state.setDescription);

  return (
    <div className="flex w-full flex-col gap-[16px]">
      <div className="flex flex-col gap-[8px]">
        <Input
          inputType={"default"}
          placeholder="Название бенефита"
          value={name}
          onChange={(value) => setName(value)}
        />
        <Input
          inputType={"default"}
          placeholder="Подпись в карточке"
          value={subtext}
          onChange={(value) => setSubtext(value)}
        />
      </div>
      <div className="flex flex-col gap-[24px]">
        <DescriptionArea
          description={description}
          setDescription={setDescription}
        />
      </div>
    </div>
  );
};
