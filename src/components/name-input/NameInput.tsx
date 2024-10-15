// src/pages/components/NameInput.tsx
import Input from "src/shared/ui/input/Input";

type Props = {
  name: string;
  setName: (value: string) => void;
};

export function NameInput({ name, setName }: Props) {
  return (
    <div className="flex flex-col gap-[8px]">
      {/* <p className="text-[20px] font-semibold">Название бенефита</p> */}
      <Input
        inputType={"default"}
        placeholder="Название бенефита"
        value={name}
        onChange={(value) => setName(value)}
      />
    </div>
  );
}
