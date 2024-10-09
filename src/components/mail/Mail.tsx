import Input from "src/shared/ui/input/Input";
import { Checkbox } from "src/shared/ui/checkbox/Checkbox";
import { useState } from "react";
// import { Radio } from "src/shared/ui/radio/Radio";

export function Mail() {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [mail, setMail] = useState<string>("");

    console.log(mail);

    return (
        <>
            <div className="flex flex-col gap-[12px]">
                <p>Почта</p>
                <Input
                    inputType={"default"}
                    mail={true}
                    onChange={setMail}
                    value={mail}
                />
                <div className="flex flex-row gap-[8px] h-[16px]">
                    <Checkbox
                        checked={isChecked}
                        onChange={(newChecked) => setIsChecked(newChecked)}
                    />
                    {/* <Radio
                        checked={isRadio}
                        onChange={(newRadio) => setIsRadio(newRadio)}
                    /> */}
                    <p className="text-[12px] ">Запомнить меня</p>
                </div>
            </div>
        </>
    );
}
