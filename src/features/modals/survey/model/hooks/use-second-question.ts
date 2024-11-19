import { useSurveyStore } from "../stores/use-survey";

export const useSecondQuestion = () => {
  const selectedSmile = useSurveyStore((state) => state.selectedSmile);
  const setSmile = useSurveyStore((state) => state.setSmile);

  const smiles = [
    { id: 1, smile: "😟" },
    { id: 2, smile: "🙁" },
    { id: 3, smile: "😐" },
    { id: 4, smile: "🙂" },
    { id: 5, smile: "😊" },
  ];

  const toggleSmile = (id: number) => {
    setSmile(selectedSmile === id ? null : id);
  };

  return { smiles, selectedSmile, toggleSmile };
};
