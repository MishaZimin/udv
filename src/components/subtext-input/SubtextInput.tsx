// src/pages/components/SubtextInput.tsx
import Input from "src/shared/ui/input/Input";

type Props = {
  subtext: string;
  setSubtext: (value: string) => void;
};

export function SubtextInput({ subtext, setSubtext }: Props) {
  return (
    <div className="flex flex-col gap-[8px]">
      {/* <p className="text-[20px] font-semibold">Подпись в карточке</p> */}
      <Input
        inputType={"default"}
        placeholder="Подпись в карточке"
        value={subtext}
        onChange={(value) => setSubtext(value)}
      />
    </div>
  );
}
