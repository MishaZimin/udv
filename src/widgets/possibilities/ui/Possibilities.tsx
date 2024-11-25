import { usePossibilitiesStore } from "src/shared/stores/use-possibilities-store";
import Toggle from "src/shared/ui/toggle/Toggle";

export const Possibilities = () => {
  const isCheckedApplication = usePossibilitiesStore(
    (state) => state.isCheckedApplication,
  );
  const toggleApplication = usePossibilitiesStore(
    (state) => state.toggleApplication,
  );

  const isCheckedReceipt = usePossibilitiesStore(
    (state) => state.isCheckedReceipt,
  );
  const toggleReceipt = usePossibilitiesStore((state) => state.toggleReceipt);

  return (
    <div className="flex flex-col gap-4">
      <h1>Возможности</h1>
      <p>Сотрудник сможет подавать заявку на подключение бенефита</p>
      <div className="lfex-row flex gap-2">
        <Toggle isChecked={isCheckedApplication} onToggle={toggleApplication} />
        <p>Подача заявки</p>
      </div>
      <p>Сотрудник сможет прикладывать фото чеков для компенсации</p>
      <div className="lfex-row flex gap-2">
        <Toggle isChecked={isCheckedReceipt} onToggle={toggleReceipt} />
        <p>Прикрепление чеков</p>
      </div>
    </div>
  );
};
