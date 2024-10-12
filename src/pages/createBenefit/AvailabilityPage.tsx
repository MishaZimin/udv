import { useCheckboxStore } from "./store/useCheckboxStore";
import { CreateBenefitLayout } from "./CreateBenefitLayout";
import { Checkbox } from "src/shared/ui/checkbox/Checkbox";

export function AvailabilityPage() {
    const { checkboxes, toggleCheckbox } = useCheckboxStore();

    return (
        <CreateBenefitLayout>
            <p className="font-semibold text-[20px]">Доступность</p>
            <p>Выберите кому будет доступен бенефит</p>
            <div className="flex flex-col gap-[16px]">
                {checkboxes.map((checkbox) => (
                    <div key={checkbox.id} className="flex flex-row gap-[8px]">
                        <div className="my-auto">
                            <Checkbox
                                checked={checkbox.checked}
                                onChange={() => toggleCheckbox(checkbox.id)}
                                text={checkbox.label}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </CreateBenefitLayout>
    );
}
