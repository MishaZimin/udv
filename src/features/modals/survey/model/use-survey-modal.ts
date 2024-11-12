import { useEffect, useState } from "react";

export const useSurveyModal = (isOpen: boolean, closeModal: () => void) => {
  const [, setSelectedBenefits] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      setSelectedBenefits([]);
      setCurrentQuestion(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (currentQuestion === 2) {
      const timer = setTimeout(() => {
        closeModal();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentQuestion, closeModal]);

  const handleNext = () => {
    if (currentQuestion < 2) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      closeModal();
    }
  };

  return { currentQuestion, handleNext };
};
