import { useCheckboxStore } from "../stores/useCheckboxStore";
import { CreateBenefitLayout } from "../layout/CreateBenefitLayout";
import { Checkbox } from "src/shared/ui/checkbox/Checkbox";
import { SubmitButton } from "src/components/submit-benefit-btn/SubmitBenefitBtn";

export function AvailabilityPage() {
  const { checkboxes, toggleCheckbox } = useCheckboxStore();

  return (
    <CreateBenefitLayout>
      <div className="flex flex-row gap-[32px]">
        <div className="flex w-full flex-col gap-[24px]">
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
          <SubmitButton />
        </div>
      </div>
    </CreateBenefitLayout>
  );
}
