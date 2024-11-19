import { useEffect, useState } from "react";
import { useSurveyStore } from "../stores/use-survey";

export const useSurveyModal = (isOpen: boolean, closeModal: () => void) => {
  const resetSurvey = useSurveyStore((state) => state.resetSurvey);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      resetSurvey();
      setCurrentQuestion(0);
    }
  }, [isOpen, resetSurvey]);

  useEffect(() => {
    if (currentQuestion === 2) {
      const timer = setTimeout(() => {
        closeModal();
        resetSurvey();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentQuestion, closeModal, resetSurvey]);

  const handleNext = () => {
    if (currentQuestion < 2) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      closeModal();
      resetSurvey();
    }
  };

  return { currentQuestion, handleNext };
};
