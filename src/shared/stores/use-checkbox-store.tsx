import { create } from "zustand";
import { getFromLocalStorage, saveToLocalStorage } from "src/shared/lib";

const LOCAL_STORAGE_KEY = "checkboxes";
const STORAGE_VERSION = "v2";

const defaultCheckboxes = [
  { id: 1, label: "до адаптационного периода", checked: false },
  { id: 2, label: "до 1 года", checked: false },
  { id: 3, label: "до 3 лет", checked: false },
  { id: 4, label: "больше 3 лет", checked: false },
];

type Checkbox = { id: number; label: string; checked: boolean };

type Props = {
  checkboxes: Checkbox[];
  toggleCheckbox: (id: number) => void;
  setCheckboxesFromResponse: (selectedIds: number[]) => void;
};

function migrateCheckboxes(): Checkbox[] {
  const storedData = getFromLocalStorage(LOCAL_STORAGE_KEY);
  const storedVersion = getFromLocalStorage("checkboxes_version");

  if (storedData && storedVersion === STORAGE_VERSION) {
    return storedData;
  }

  if (storedData) {
    const migratedData = defaultCheckboxes.map((defaultCheckbox) => {
      const oldCheckbox = storedData.find(
        (item: Checkbox) => item.id === defaultCheckbox.id,
      );
      return {
        ...defaultCheckbox,
        checked: oldCheckbox ? oldCheckbox.checked : defaultCheckbox.checked,
      };
    });

    saveToLocalStorage(LOCAL_STORAGE_KEY, migratedData);
    saveToLocalStorage("checkboxes_version", STORAGE_VERSION);
    return migratedData;
  }

  saveToLocalStorage(LOCAL_STORAGE_KEY, defaultCheckboxes);
  saveToLocalStorage("checkboxes_version", STORAGE_VERSION);
  return defaultCheckboxes;
}

export const useCheckboxStore = create<Props>((set) => ({
  checkboxes: migrateCheckboxes(),

  toggleCheckbox: (id: number) =>
    set((state) => {
      const updatedCheckboxes = state.checkboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox,
      );

      saveToLocalStorage(LOCAL_STORAGE_KEY, updatedCheckboxes);

      return { checkboxes: updatedCheckboxes };
    }),

  setCheckboxesFromResponse: (selectedIds: number[]) =>
    set((state) => {
      const updatedCheckboxes = state.checkboxes.map((checkbox) => ({
        ...checkbox,
        checked: selectedIds.includes(checkbox.id),
      }));

      saveToLocalStorage(LOCAL_STORAGE_KEY, updatedCheckboxes);

      return { checkboxes: updatedCheckboxes };
    }),
}));
