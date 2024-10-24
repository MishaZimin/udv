import { create } from "zustand";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "src/shared/lib/local-storage";

type Props = {
  checkboxes: { id: number; label: string; checked: boolean }[];
  toggleCheckbox: (id: number) => void;
};

export const useCheckboxStore = create<Props>((set) => ({
  // Инициализация чекбоксов из localStorage или с дефолтными значениями
  checkboxes: getFromLocalStorage("checkboxes") || [
    { id: 1, label: "до 3 месяцев", checked: false },
    { id: 2, label: "до 1 года", checked: false },
    { id: 3, label: "до 3 лет", checked: false },
    { id: 4, label: "больше 3 лет", checked: false },
  ],

  // Переключение состояния чекбоксов
  toggleCheckbox: (id: number) =>
    set((state) => {
      const updatedCheckboxes = state.checkboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox,
      );

      // Сохранение обновленных чекбоксов в localStorage
      saveToLocalStorage("checkboxes", updatedCheckboxes);

      return { checkboxes: updatedCheckboxes };
    }),
}));
