import { useState } from "react";
import { Input, Checkbox } from "src/shared/ui";

export const Mail = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [mail, setMail] = useState<string>("");

  return (
    <>
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[4px] text-[14px]">
          <p className="leading-[20px]">Почта</p>
          <Input
            inputType={"default"}
            mail={true}
            onChange={setMail}
            value={mail}
          />
        </div>
        <div className="flex h-[20px] flex-row gap-[8px]">
          <Checkbox
            checked={isChecked}
            onChange={(newChecked) => setIsChecked(newChecked)}
            text={"Запомнить меня"}
          />
          <p className="text-[12px]"></p>
        </div>
      </div>
    </>
  );
};
