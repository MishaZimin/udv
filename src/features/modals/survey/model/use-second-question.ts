// src/features/survey/model/useSecondQuestion.ts
import { useState } from "react";

export const useSecondQuestion = () => {
  const [selectedSmile, setSelectedSmile] = useState<number | null>(null);

  const smiles = [
    { id: 1, smile: "😣" },
    { id: 2, smile: "🙁" },
    { id: 3, smile: "😐" },
    { id: 4, smile: "🙂" },
    { id: 5, smile: "😊" },
  ];

  const toggleSmile = (id: number) => {
    setSelectedSmile((prev) => (prev === id ? null : id));
  };

  return { smiles, selectedSmile, toggleSmile };
};
