import { useCheckboxStore } from "src/shared/stores/use-checkbox-store";
import { Checkbox } from "src/shared/ui/checkbox/Checkbox";

export const BenefitAvailability = () => {
  const { checkboxes, toggleCheckbox } = useCheckboxStore();

  return (
    <div className="flex w-full flex-col gap-4">
      <h1>Доступность</h1>
      <div className="flex flex-col gap-[16px]">
        <p>Выберите кому будет доступен бенефит</p>
      </div>
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
    </div>
  );
};
